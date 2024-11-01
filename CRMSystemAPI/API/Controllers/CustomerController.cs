using Application.Customers.Commands;
using Application.Customers.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;
        private readonly IMediator _mediator;

        public CustomerController(ILogger<CustomerController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IEnumerable<CustomerSummaryDto>> GetAll()
        {
            return await _mediator.Send(new GetAllCustomersQuery());
        }

        [HttpGet]
        public async Task<CustomerDto> Get(int id)
        {
            return await _mediator.Send(new GetCustomerQuery(id));
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateCustomerCommand command)
        {
            return await _mediator.Send(command);
        }


        [HttpPut]
        public async Task<ActionResult<bool>> Update(UpdateCustomerCommand command)
        {
            return await _mediator.Send(command);
        }
    }
}
