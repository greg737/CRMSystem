using Application.Interface;
using Domain.Enums;
using MediatR;

namespace Application.SaleOpportunities.Commands
{
    public class UpdateSaleOpportunity
    {
        public record UpdateSaleOpportunityCommand : IRequest<bool>
        {
            public int Id { get; set; }
            public SaleStatus Status { get; init; }
            public int CustomerId { get; init; }
            public string Name { get; init; }
        }

        public class UpdateSaleOpportunityCommandHandler : IRequestHandler<UpdateSaleOpportunityCommand, bool>
        {
            private readonly ICRMDbContext _context;

            public UpdateSaleOpportunityCommandHandler(ICRMDbContext context)
            {
                _context = context;
            }

            public async Task<bool> Handle(UpdateSaleOpportunityCommand request, CancellationToken cancellationToken)
            {
                var entity = await _context.SaleOpportunities.FindAsync(new object[] { request.Id }, cancellationToken);

                if (entity != null)
                {
                    entity.Status = request.Status;
                    entity.Name = request.Name;
                }

                await _context.SaveChangesAsync(cancellationToken);
                return true;
            }
        }
    }
}
