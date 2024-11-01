using Application.Interface;
using Infrastructure.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("CrmDb");
            services.AddDbContext<ICRMDbContext, CRMDbContext>(opt => opt.UseSqlServer(connectionString));

            services.AddScoped<CRMDbContextInitialiser>();

            return services;

        }
    }
}
