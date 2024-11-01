using Application.Interface;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Customers.Queries
{
    public record GetAllCustomersQuery : IRequest<IEnumerable<CustomerSummaryDto>>
    {
    }

    public class GetAllCustomersQueryHandler : IRequestHandler<GetAllCustomersQuery, IEnumerable<CustomerSummaryDto>>
    {
        private readonly ICRMDbContext _context;

        public GetAllCustomersQueryHandler(ICRMDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CustomerSummaryDto>> Handle(GetAllCustomersQuery request, CancellationToken cancellationToken)
        {
            return await _context.Customers.Select(c => 
                new CustomerSummaryDto {
                    Id = c.Id,
                    Status = c.Status,
                    Created = c.Created,
                    Name = c.Name
                })
            .ToListAsync(cancellationToken);
        }
    }

}
