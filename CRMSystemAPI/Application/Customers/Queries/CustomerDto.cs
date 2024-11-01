using Domain.Enums;

namespace Application.Customers.Queries
{
    public class CustomerDto
    {
        public int Id { get; init; }
        public CustomerStatus Status { get; init; }
        public DateTime Created { get; init; }
        public string Name { get; init; }
        public string Email { get; init; }
        public string Phone { get; init; }
        public List<SaleOpportunityDto> SaleOpportunities { get; set; }
    }
}
