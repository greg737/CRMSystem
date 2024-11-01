using Domain.Enums;

namespace Application.Customers.Queries
{
    public class CustomerSummaryDto
    {
        public int Id { get; init; }
        public CustomerStatus Status { get; init; }
        public DateTime Created { get; init; }
        public string Name { get; init; }
    }
}
