using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AddressDto // 176
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string state { get; set; }
        [Required]
        public string Zipcode { get; set; }
    }
}