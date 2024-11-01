using Application.Interface;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Customers.Commands
{
    public record CreateCustomerCommand : IRequest<int>
    {
        public CustomerStatus Status { get; init; }
        public DateTime Created { get; init; }
        public string Name { get; init; }
        public string Email { get; init; }
        public string Phone { get; init; }
    }

    public class CreateCustomerCommandHandler : IRequestHandler<CreateCustomerCommand, int>
    {
        private readonly ICRMDbContext _context;

        public CreateCustomerCommandHandler(ICRMDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
        {
            var entity = new Customer
            {
                Status = request.Status,
                Created = request.Created,
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone
            };

            _context.Customers.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
