using Microsoft.AspNetCore.Mvc;

namespace AboutMe.Controllers
{
    public class PersonalController : Controller
    {
        public IActionResult Personal()
        {
            return View();
        }
    }
}