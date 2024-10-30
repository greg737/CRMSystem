using Domain.Enums;

namespace Domain.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public CustomerStatus Status { get; set; }
        public DateTime Created { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}