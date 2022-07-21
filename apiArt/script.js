// https://api.artic.edu/api/v1/artworks/129884
// https://api.artic.edu/api/v1/artworks
var loadArt = function(event) {
    fetch("https://api.artic.edu/api/v1/artworks")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (artResponse) {
            artDisplay = document.querySelector("#artData");
            
            console.log(artResponse.data);
            artResponse.artworks.forEach(artwork) 
                artDisplay.innerHTML = artInfo.artworks;
                
            })
        
}

loadArt();

document.addEventListener("readystatechange", loadArt);