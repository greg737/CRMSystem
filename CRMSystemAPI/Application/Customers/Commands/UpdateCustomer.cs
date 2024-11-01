using Application.Interface;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System.Numerics;
using System.Xml.Linq;

namespace Application.Customers.Commands
{
    public record UpdateCustomerCommand : IRequest<bool>
    {
        public int Id { get; set; }
        public CustomerStatus Status { get; init; }
        public DateTime Created { get; init; }
        public string Name { get; init; }
        public string Email { get; init; }
        public string Phone { get; init; }
    }

    public class UpdateCustomerCommandHandler : IRequestHandler<UpdateCustomerCommand, bool>
    {
        private readonly ICRMDbContext _context;

        public UpdateCustomerCommandHandler(ICRMDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(UpdateCustomerCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Customers.FindAsync(new object[] { request.Id }, cancellationToken);

            if (entity != null)
            {
                entity.Status = request.Status;
                entity.Created = request.Created;
                entity.Name = request.Name;
                entity.Email = request.Email;
                entity.Phone = request.Phone;
            }

            await _context.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
