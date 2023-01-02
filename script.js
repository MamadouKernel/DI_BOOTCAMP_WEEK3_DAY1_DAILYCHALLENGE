/**
 * @author: Konate Mamadou
 * Exercie: Daily Challenge
 */

//Créez un tableau contenant les planètes du système solaire :

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

//Créez une div pour chaque planète en utilisant la méthode createElement et en lui attribuant la classe planet :

const planetDivs = planets.map((planet) => {
    const div = document.createElement('div');
    div.classList.add('planet');
    return div;
});

//Ajoutez une classe de couleur de fond différente à chaque div de planète :

const planetColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown'];

planetDivs.forEach((div, i) => {
    div.classList.add(planetColors[i]);
});


//Ajoutez chaque div de planète au <section> dans le HTML :

const listPlanets = document.querySelector('.listPlanets');
planetDivs.forEach((div) => {
    listPlanets.appendChild(div);
});


//Bonus :

    //Créez un tableau d'objets représentant les planètes et leurs lunes :

    // const solarSystem = [{planet: 'Mercury', moons: ['Hermes']},
    // {planet: 'Venus', moons: ['Hera']},{planet: 'Earth', moons: ['Luna']},
    // {planet: 'Mars', moons: ['Deimos', 'Phobos']},{planet: 'Jupiter', moons: ['Io', 'Europa', 'Ganymede', 'Callisto']},
    // {planet: 'Saturn', moons: ['Titan', 'Rhea', 'Mimas', 'Enceladus']},{planet: 'Uranus', moons: ['Ariel', 'Miranda', 'Titania', 'Oberon']},
    // {planet: 'Neptune', moons: ['Triton', 'Proteus']},];


    /*Créez une div de planète et une div de lune pour chaque planète et 
    chaque lune en utilisant la méthode createElement et en leur attribuant 
    les classes planet et moon respectivement :*/


    // const planetMoonDivs = solarSystem.map((planet) => {
    //     // Create planet div
    //     const planetDiv = document.createElement('div');
    //     planetDiv.classList.add('planet');

    //     // Create moon divs
    //     const moonDiv      

