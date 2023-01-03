/**
 * @author: Konate Mamadou
 * Exercie: Daily Challenge
 */

/* **************** Daily Challenge ***************** */

function displayPlanets() {


    //Créez un tableau contenant les planètes du système solaire :
    let planets = ["Mercure", "Vénus", "la Terre", "Mars", "Ceres", "Jupiter", "Saturne", "Uranus", "Neptune", "Pluton", "Charon"];

    //Ajoutez une classe de couleur de fond différente à chaque div de planète :

    let planetsColors = ["white", "red", "orange", "pink", "grey", "yellow", "blue", "brown", "aqua", "purple", "green"];

    let planetContainer = document.querySelector(".listPlanets");
    planetContainer.style.display = "flex";
    planetContainer.style.flexWrap = "wrap";

    //Créez une div pour chaque planète en utilisant la méthode createElement et en lui attribuant la classe planet :
    for(let i = 0; i < planets.length; i++) {
        
        let div = document.createElement("div");
        
        //Ajoutez chaque div de planète au <section> dans le HTML :

        let divName = document.createTextNode(planets[i]);
        div.appendChild(divName);
        div.classList.add("planet");
        div.style.background = planetsColors[i];
        div.style.margin = "5px";
        div.style.fontWeight = "bold";
        planetContainer.appendChild(div);

    }

}

displayPlanets();

/* **************** End Daily Challenge ******************** */