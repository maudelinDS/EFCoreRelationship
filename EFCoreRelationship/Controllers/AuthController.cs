﻿using EFCoreRelationship.Data;
using EFCoreRelationship.Dtos;
using EFCoreRelationship.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.CodeAnalysis.Scripting;

namespace EFCoreRelationship.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        //injection pour jwtSerevice
        public AuthController(IUserRepository repository, JwtService jwtService) 
        {
        _repository = repository;
            _jwtService = jwtService;
        }


        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            string salt = BCrypt.Net.BCrypt.GenerateSalt();

            var user = new User
            {
                UserFirstName = dto.UserFirstName,
                UserLastName = dto.UserLastName,
                UserEmail = dto.UserEmail,
                UserPassword = BCrypt.Net.BCrypt.HashPassword(dto.UserPassword, salt),
                UserPhone = dto.UserPhone,
            RoleId = dto.RoleId,
            JobId = dto.JobId,
        };
            return Created("succes", _repository.Create(user));
        }

        //[HttpPost("login")]
        //public IActionResult Login(LoginDto dto)
        //{
        //    var user = _repository.GetByEmail(dto.UserEmail);

        //    if (user == null)
        //        return BadRequest(new { message = "Invalid" });

        //    if (string.IsNullOrEmpty(dto.UserPassword) || string.IsNullOrEmpty(user.UserPassword))
        //        return BadRequest(new { message = "Invalid" });

        //    if (!BCrypt.Net.BCrypt.Verify(dto.UserPassword, user.UserPassword))
        //        return BadRequest(new { message = "Invalid" });
        //    //encode jwt
        //    var jwt = _jwtService.Generate(user.UserId);

        //    Response.Headers.Add("Set-Cookie", "jwt=" + jwt + "; path=/; HttpOnly");


        //    return Ok(new
        //    {
        //        message = "succes"

        //    });
        //}

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _repository.GetByEmail(dto.UserEmail);

            if (user == null)
                return BadRequest(new { message = "Invalid" });

            if (string.IsNullOrEmpty(dto.UserPassword) || string.IsNullOrEmpty(user.UserPassword))
                return BadRequest(new { message = "Invalid" });

            if (!BCrypt.Net.BCrypt.Verify(dto.UserPassword, user.UserPassword))
                return BadRequest(new { message = "Invalid" });

            var jwt = _jwtService.Generate(user.UserId);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                Path = "/",
                HttpOnly = true
            });

            return Ok(new
            {
                message = "success",
                jwt = jwt
            });
        }

        //decode jwt

        [HttpGet("user")]
        public IActionResult User() 
        {
            try 
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = _repository.GetById(userId);

                return Ok(user);
            }catch(Exception ) 
            {
                return Unauthorized(); 
            }
        }
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok();
        }

        [HttpGet("test-cookie")]
        public IActionResult TestCookie()
        {
            if (Request.Cookies.TryGetValue("jwt", out var jwt))
            {
                return Ok(new { message = "Cookie received", jwt });
            }
            else
            {
                return BadRequest(new { message = "Cookie not received" });
            }
        }
    }
}
