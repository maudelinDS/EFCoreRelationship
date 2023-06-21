using System.Drawing.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.CodeAnalysis.Classification;
using Microsoft.IdentityModel.Tokens;

namespace EFCoreRelationship.Helpers
{
    public class JwtService
    {
        public  string secureKey = "this is a security async very secure key";
        public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            //data for encoding
            //parametre du token avec date d'expiration
            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1));


            var securityToken = new JwtSecurityToken(header, payload);


            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
        public JwtSecurityToken Verify(string jwt) 
        {
            var tokenHandler = new  JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secureKey);

            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,

            }, out SecurityToken validatedToken); ;

            return (JwtSecurityToken)validatedToken; 
        }
    }
}
