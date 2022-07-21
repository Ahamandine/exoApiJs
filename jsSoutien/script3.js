function changePromotionName(event) {
    // On récupère la valeur dans l'input
    var promotionName = promotionNameInput.value;
    // On l'affiche en console
    console.log(promotionName);
    // on l'enregistre en localStorage avec comme nom de stockage: PromotionName
    localStorage.setItem("PromotionName", promotionName)
    // on modifie le champ d'input
    promotionNameInput.value = promotionName;
}

function deletePromotionName(event) {
    // on supprime du localStorage l'enregistrement 
    localStorage.removeItem("PromotionName")
    // on vide le champ d'input
    promotionNameInput.value = "";
}

var promotionNameInput = document.querySelector("#promotionName");
var changeButton = document.querySelector("#changePromotionName");
var deleteButton = document.querySelector("#deletePromotionName");

changeButton.addEventListener("click", changePromotionName);
deleteButton.addEventListener("click", deletePromotionName);

/* Ici du code qui va s'exécuter à la fin du chargement DOM (à cause du defer
    indiqué dans la balise script) */


/* On commence par récupérer ce qui est , ou non, sauvegardé
.value récupère la donnée stockée dans input
On affecte ce qu'on a récupéré dans la valeur de l'input #promotionName
*/

var promotionName = localStorage.getItem("PromotionName");
promotionNameInput.value = promotionName;
console.log(promotionName);
