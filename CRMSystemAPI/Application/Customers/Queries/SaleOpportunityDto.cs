using Domain.Enums;

namespace Application.Customers.Queries
{
    public class SaleOpportunityDto
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public SaleStatus Status { get; set; }
        public string Name { get; set; }
    }
}
