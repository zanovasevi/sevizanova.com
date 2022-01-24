using Microsoft.AspNetCore.Mvc;

namespace AboutMe.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Contact()
        {
            return View();
        }
    }
}