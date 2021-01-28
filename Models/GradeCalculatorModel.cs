using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//Emma Haynes IS 413 1-27-21

namespace Assignment1.Models
{
    public class GradeCalculatorModel
    {
        //Allow only numbers 0 - 100 as inputs
        [Range(0,100)]
        public int assignment { get; set; }
        [Range(0, 100)]
        public int group { get; set; }
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
