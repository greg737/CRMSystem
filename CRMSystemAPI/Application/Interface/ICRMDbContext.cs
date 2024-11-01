using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Interface
{
    public interface ICRMDbContext
    {
        DbSet<Customer> Customers { get; }
        DbSet<SaleOpportunity> SaleOpportunities { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
