namespace EFCoreRelationship.Data
{
    public class UsersController : IUserRepository
    {
        private readonly AppDbContext _context;
        public UsersController(AppDbContext context) 
        {
        _context = context;
        }
        public User Create(User user) 
        {
        _context.Users.Add(user);
            user.UserId = _context.SaveChanges();
            
            return user;
        }
        public User GetByEmail(string email) 
        {
            return _context.Users.FirstOrDefault(u => u.UserEmail == email);
        } 
        
        public User GetById(int id) 
        {
            return _context.Users.FirstOrDefault(u => u.UserId == id);
        }
    }
}
