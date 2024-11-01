using Application.Interface;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class CRMDbContext : DbContext, ICRMDbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<SaleOpportunity> SaleOpportunities { get; set; }
        public CRMDbContext(DbContextOptions options) : base(options) { }
    }
}
