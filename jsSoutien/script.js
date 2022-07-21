
// // Load Image est la fonction appelée quand on clique sur le bouton
// myButton.addEventListener("click", loadImage);

// // la fameuse fonction loadImage
// /*   Les fonctions de callback (par exemple celles appelées par un eventListener)
// * reçoivent un paramètre: le contexte de l'évènement
// */
// var loadImage = function (event) {
//     var myImage = document.querySelector("#myImage");

//     /* 
//         *fetch() est une fonction native JS pour dire d'aller chercher quelque
//             chose
//         *Le premier .then : c'est ce qui se passe quand JS a ramené le quelque chose
//         *La fonction de callback du premier then, c'est ce qu'on va faire au quelque
//             chose qui a été ramené, le rendre exploitable 
//         *La seconde fonction de callback c'est ce qu'on va faire du quelque chose exploitable
//     */

//     fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
//     // D'abord récupération
//     .then(function (response){
//         myImage.alt = "Transformation en cours";
//         console.log(response);
//         return response.blob();
//     })
//     // Ensuite création de l'url pour affichage
//     .then(function (blobedResponse) {
//         var blobedResponseURL = URL.createObjectURL(blobedResponse);
//         myImage.alt = "Logo Wikipédia";
//         myImage.src = blobedResponseURL;
//     });
// }

var myButton = document.querySelector("#myButton");

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