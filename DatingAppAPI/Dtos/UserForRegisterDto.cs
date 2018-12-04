using System.ComponentModel.DataAnnotations;

namespace DatingAppAPI.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage="You Must provided password between 4 to 8 charecters")]
        public string Password { get; set; }
    }
}