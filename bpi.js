
/************** Toogle menu bar **************/
// var x = document.querySelector(".nav-links");

// function hide() {
//     x.style.display = "none";
// }

// function show() {
//    x.style.display = "block";
// }

const menu = document.querySelector(".menu-option");
const y = document.querySelector(".nav");

const toogle = () => {
    y.classList.toggle("active");
};

menu.addEventListener("click", () => toogle());


/************** Login **************/

var pass = document.querySelector("#pass");
var show = document.querySelector("#show");
var hide = document.querySelector("#hide");

function eye_func() {
    if (pass.type === "password") {
        pass.type = "text";
        show.style.display = "block";
        hide.style.display = "none"
    }
    else {
        pass.type = "password"
        show.style.display = "none";
        hide.style.display = "block";
    }
}




/************** Academics **************/

var academic_heade = document.querySelector("#academic-heade");
var academics_js = document.querySelector("#academics-js")
var routine_js= document.querySelector("#routine-js")
var syllabus_js = document.querySelector("#syllabus-js");
var course_js = document.querySelector("#course-js");
var cou_out_js = document.querySelector("#cou-out-js");
var certi_js = document.querySelector("#certi-js");


function aca_cal() {
    academic_heade.innerHTML = "Academics Calender";
    academics_js.style.display = "block";
    routine_js.style.display = "none";
    syllabus_js.style.display = "none";
    course_js.style.display = "none";
    cou_out_js.style.display = "none";
    certi_js.style.display = "none";
}

function cls_routine() {
    academic_heade.innerHTML = "Class Routine";
    academics_js.style.display = "none";
    routine_js.style.display = "block";
    syllabus_js.style.display = "none";
    course_js.style.display = "none";
    cou_out_js.style.display = "none";
    certi_js.style.display = "none";
}

function syllabus() {
    academic_heade.innerHTML = "Syllabaus";
    academics_js.style.display = "none";
    routine_js.style.display = "none";
    syllabus_js.style.display = "block";
    course_js.style.display = "none";
    cou_out_js.style.display = "none";
    certi_js.style.display = "none";
}

function cou_str() {
    academic_heade.innerHTML = "Course Stracture";
    academics_js.style.display = "none";
    routine_js.style.display = "none";
    syllabus_js.style.display = "none";
    course_js.style.display = "block";
    cou_out_js.style.display = "none";
    certi_js.style.display = "none";
}

function cou_out() {
    academic_heade.innerHTML = "Course Outline";
    academics_js.style.display = "none";
    routine_js.style.display = "none";
    syllabus_js.style.display = "none";
    course_js.style.display = "none";
    cou_out_js.style.display = "block";
    certi_js.style.display = "none";
}


function certi() {
    academic_heade.innerHTML = " Certificate & Transcript of the following students are available </br> Please contact with- </br> Md. Samaun Islam </br> Phone:017 65 0740 39 </br> E-Mail:bpigaga@gmail.com ";
    academics_js.style.display = "none";
    routine_js.style.display = "none";
    syllabus_js.style.display = "none";
    course_js.style.display = "none";
    cou_out_js.style.display = "none";
    certi_js.style.display = "block";
}

// var pass = document.querySelector("#pass");
// var show = document.querySelector("#show");
// var hide = document.querySelector("#hide");

// function eye_func() {
//     if (pass.type === "password") {
//         pass.type = "text";
//         show.style.display = "block";
//         hide.style.display = "none";
//     }
//     else {
//         pass.type = "password";
//         show.style.display = "none";
//         hide.style.display = "block";
//     }
// }
