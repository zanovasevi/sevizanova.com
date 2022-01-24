using Microsoft.AspNetCore.Mvc;

namespace AboutMe.Controllers
{
    public class CoursesController : Controller
    {
        public IActionResult Courses()
        {
            return View();
        }
    }
}