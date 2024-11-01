using Azure.Core;
using Domain.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public static class InitialiserExtensions
    {
        public static async Task InitialiseDatabaseAsync(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var initialiser = scope.ServiceProvider.GetRequiredService<CRMDbContextInitialiser>();

            await initialiser.InitialiseAsync();

            await initialiser.SeedAsync();
        }
    }
    public class CRMDbContextInitialiser(ILogger<CRMDbContextInitialiser> logger, CRMDbContext context)
    {
        private readonly ILogger<CRMDbContextInitialiser> _logger = logger;
        private readonly CRMDbContext _context = context;

        public async Task InitialiseAsync()
        {
            try
            {
                await _context.Database.MigrateAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while initialising the database.");
                throw;
            }
        }

        public async Task SeedAsync()
        {
            try
            {
                await TrySeedAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while seeding the database.");
                throw;
            }
        }

        public async Task TrySeedAsync()
        {
            if (!_context.Customers.Any())
            {
                _context.Customers.Add(new Customer
                {
                    Status = Domain.Enums.CustomerStatus.Active,
                    Created = DateTime.Now,
                    Name = "Test User",
                    Email = "test@test.com",
                    Phone = "1234567890"
                });

                await _context.SaveChangesAsync();
            }
        }
    }
}
