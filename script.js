// AFFICHAGE DU LOGO WIKIPEDIA

var myButton = document.querySelector("#myButton");
var myImage = document.querySelector("#myImage");

myButton.addEventListener("click", function (event) {
    var myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
            myImage.alt = "Le logo de Wikipédia";
        });
})

// FETCH STUDENTS

var studentsDiv = document.querySelector(".students");
fetch("https://pachyderme.net/students.json")
    .then(response => response.json())
    .then(function (studentsJSON) {
        console.log(studentsJSON);
        // studentsJSON.students.forEach(function (student)
        {
            studentsData(studentsJSON)
            console.log(student)
        }
    });


;
// AFFICHAGE DES STUDENTS

function studentsData(studentsList){

    // let studentsLastName = document.querySelector('#studentsLastName');
    // let studentsFirstName = document.querySelector('#studentsFirstName');
    // let studentsGithub = document.querySelector('#studentsGithub');
    studentsList.innerHTML = `<div>${element.firstname}</div> + "<br>"
                                <div>${element.lastname}</div> + "<br>"
                                <div>${element.githubid}</div> + "<br>"`
}


studentsLastName.textContent = student.lastname;
studentsFirstName.textContent = student.firstname;
studentsGithub.textContent = student.githubid;

// var studentsData = ["Alexandre.C","Alexandre.B", "Amandine","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad","Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas", "Tristan"];

// var studentsList = document.querySelector(".students");

// for (var i=0; i < studentsData.length; i++) {
    // studentsList.innerHTML += studentsData[i] + "<br>";	
// }

// studentsData.forEach(function(student) {
//     studentsList.innerHTML += student + "<br>";
// })