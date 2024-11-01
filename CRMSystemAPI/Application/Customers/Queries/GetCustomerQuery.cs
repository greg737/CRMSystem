using Application.Interface;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Customers.Queries
{
    public record GetCustomerQuery(int CustomerId) : IRequest<CustomerDto> 
    {
    }

    public class GetCustomerQueryHandler : IRequestHandler<GetCustomerQuery, CustomerDto>
    {
        private readonly ICRMDbContext _context;

        public GetCustomerQueryHandler(ICRMDbContext context)
        {
            _context = context;
        }

        public async Task<CustomerDto> Handle(GetCustomerQuery request, CancellationToken cancellationToken)
        {
            return await _context.Customers.Select(c =>
                new CustomerDto
                {
                    Id = c.Id,
                    Status = c.Status,
                    Created = c.Created,
                    Name = c.Name,
                    Email = c.Email,
                    Phone = c.Phone,
                    SaleOpportunities = c.SaleOpportunities.Select(s =>
                        new SaleOpportunityDto
                        {
                            Id = s.Id,
                            Status = s.Status,
                            Name = s.Name
                        }).ToList()
                }).FirstOrDefaultAsync(c => c.Id == request.CustomerId, cancellationToken);
        }
    }
}
