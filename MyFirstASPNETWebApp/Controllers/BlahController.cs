﻿using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyFirstASPNETWebApp.Controllers
{
    public class BlahController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {

      
            return View();
        }
        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Calculator (CalculatorModel model)
        {
            return View();
        }
    }
}
