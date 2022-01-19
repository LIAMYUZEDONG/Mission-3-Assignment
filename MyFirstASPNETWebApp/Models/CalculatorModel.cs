using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class CalculatorModel
    {

        [Range(0, 100, ErrorMessage = "Assignment Score must be between 0 and 100")]
        public int Assignment { get; set; }

        [Range(0, 100, ErrorMessage = "Group Project Score must be between 0 and 100")]
        public int GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes Score must be between 0 and 100")]
        public int Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Exams Score must be between 0 and 100")]
        public int Exams { get; set; }

        [Range(0, 100, ErrorMessage = "INTEX Score must be between 0 and 100")]
        public int INTEX { get; set; }


    }
}
