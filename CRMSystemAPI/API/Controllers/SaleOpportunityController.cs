using Application.SaleOpportunities.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using static Application.SaleOpportunities.Commands.UpdateSaleOpportunity;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SaleOpportunityController : Controller
    {
        private readonly ILogger<SaleOpportunityController> _logger;
        private readonly IMediator _mediator;

        public SaleOpportunityController(ILogger<SaleOpportunityController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateSaleOpportunityCommand command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<bool>> Update(UpdateSaleOpportunityCommand command)
        {
            return await _mediator.Send(command);
        }
    }
}
