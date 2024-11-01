using Application.Interface;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.SaleOpportunities.Commands
{
    public record CreateSaleOpportunityCommand : IRequest<int>
    {
        public SaleStatus Status { get; init; }
        public int CustomerId { get; init; }
        public string Name { get; init; }
    }

    public class CreateSaleOpportunityCommandHandler : IRequestHandler<CreateSaleOpportunityCommand, int>
    {
        private readonly ICRMDbContext _context;

        public CreateSaleOpportunityCommandHandler(ICRMDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateSaleOpportunityCommand request, CancellationToken cancellationToken)
        {
            var entity = new SaleOpportunity
            {
                Status = request.Status,
                CustomerId = request.CustomerId,
                Name = request.Name,
            };

            _context.SaleOpportunities.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
