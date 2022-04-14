using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Presentation_Layer.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Customers()
        {
            BLL_Layer bLL_Layer = new BLL_Layer();
            ViewBag.Message = "List of our customers";
            ViewData.Model = bLL_Layer.GetCustomer_BLL();

            return View();
        }
    }
}