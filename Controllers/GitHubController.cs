using Microsoft.AspNetCore.Mvc;

namespace AboutMe.Controllers
{
    public class GitHubController : Controller
    {
        public IActionResult GitHub()
        {
            return View();
        }
    }
}