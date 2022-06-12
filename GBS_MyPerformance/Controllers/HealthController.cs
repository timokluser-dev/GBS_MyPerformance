using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GBS_MyPerformance.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
        // GET: api/Health
        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }
    }
}
