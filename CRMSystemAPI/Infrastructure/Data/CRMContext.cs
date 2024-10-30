using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class CRMContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<SaleOpportunity> SaleOpportunities { get; set; }
        public CRMContext(DbContextOptions options) : base(options) { }
    }
}
