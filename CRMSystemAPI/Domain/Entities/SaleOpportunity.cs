using Domain.Enums;

namespace Domain.Entities
{
    public class SaleOpportunity
    {
        public int Id { get; set; }
        public SaleStatus Status { get; set; }
        public string Name { get; set; }
    }
}