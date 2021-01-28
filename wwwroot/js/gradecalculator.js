//Emma Haynes 1-27-21

//Grab values from form
$("#submitButton").click( function () {
    var assignment = $("#assignment").val();
    var group = $("#group").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();
    var grade = 0;
    var letter = "";

    //calculates percentage
    grade = (assignment * .5) + (group * .1) + (quizzes * .1) + (exams * .2) + (intex * .1);

    //calculates letter grade
    if (grade >= 93) {
        letter = "A";
    }
    else if (grade >= 90) {
        letter = "A-";
    }
    else if (grade >= 87) {
        letter = "B+";
    }
    else if (grade >= 83) {
        letter = "B";
    }
    else if (grade >= 80) {
        letter = "B-";
    }
    else if (grade >= 77) {
        letter = "C+";
    }
    else if (grade >= 73) {
        letter = "C";
    }
    else if (grade >= 70) {
        letter = "C-";
    }
    else if (grade >= 67) {
        letter = "D+";
    }
    else if (grade >= 63) {
        letter = "D";
    }
    else if (grade >= 60) {
        letter = "D-";
    }
    else {
        letter = "E";
    }

    alert("Your grade will be " + grade + "%" + " which is a " + letter + "!");
});