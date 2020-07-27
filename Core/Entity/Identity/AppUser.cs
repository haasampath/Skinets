using Microsoft.AspNetCore.Identity;

namespace Core.Entity.Identity
{
    public class AppUser : IdentityUser// Microsoft.Extensions.Identity.Stores //162
    {
        public string DisplayName { get; set; }
        public Address Address { get; set; }
    }
}