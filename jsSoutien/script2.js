var loadStudents = function(event) {
    console.log("loadStudents appelé")
    fetch("https://pachyderme.net/students.json")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (jsonResponse) {
            studentsUl = document.querySelector("#students");
            // console.log(student) console.log(student.firstname);
            
            jsonResponse.students.forEach(function (student) {
                studentLi = document.createElement("li");
                
                studentLi.innerHTML = student.firstname + " " + student.lastname;
                studentsUl.appendChild(studentLi);
                
            })
        })
}


/* on écoute l'événement qui se déclenche quand la page est totatlement chargée
    (images, css, js etc. chargés et traités) */ 
document.addEventListener("readystatechange", loadStudents);