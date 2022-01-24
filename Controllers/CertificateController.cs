using Microsoft.AspNetCore.Mvc;

namespace AboutMe.Controllers
{
    public class CertificateController : Controller
    {
        public IActionResult Certificate()
        {
            return View();
        }
    }
}