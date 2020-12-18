// Write your JavaScript code here!

window.addEventListener("load", function () {
    console.log("Hello World");
    let div = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       if (pilotNameInput.value === "" || isNaN(Number(pilotNameInput.value)) == false) {
          alert("Must enter a pilot name");
          pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`;
       };
       if (copilotNameInput.value === "" || isNaN(Number(copilotNameInput.value)) == false) {
          alert("Must enter a co-pilot name");
       };
       if (fuelLevelInput.value === "" || isNaN(Number(fuelLevelInput.value)) == true) {
          alert("Must enter a fuel level in liters");
       };
       if (cargoMassInput.value === "" || isNaN(Number(cargoMassInput.value)) == true) {
          alert("Must enter a fuel level in kilograms");
       };
       event.preventDefault();
       document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready`;
       document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready`;
       if (fuelLevelInput.value < 10000) {
          document.getElementById("fuelStatus").innerHTML = `${fuelLevelInput.value} is not enough fuel for the flight`;
          document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
          document.querySelector("#launchStatusCheck").style.color = "red";
       } else if (cargoMassInput.value > 10000) {
          document.getElementById("cargoStatus").innerHTML = `${cargoMassInput.value} is too heavy for the flight`;
          document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
          document.querySelector("#launchStatusCheck").style.color = "red";
       } else {
          document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
          document.querySelector("#launchStatusCheck").style.color = "green";
       };
       let json = [];
       fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
          response.json().then(function (json) {
             let i = 0;
             console.log(json[i]);
 
 
             function visibility() {
                document.querySelector("#faultyItems").style.visibility = "visible";
             };
             visibility();
 
             //window.addEventListener("load",function(){
             fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
                response.json().then(function (json) {
                   const destination = document.getElementById("missionTarget");
                   let i = 0;
                   console.log(json[i]);
                   destination.innerHTML = `
                   <h2>Mission Destination</h2>
                   <ol>
                      <li>Name: ${json[i].name}</li>
                      <li>Diameter: ${json[i].diameter}</li>
                      <li>Star: ${json[i].star}</li>
                      <li>Distance from Earth: ${json[i].distance}</li>
                      <li>Number of Moons: ${json[i].moons}</li>
                   </ol>
                   <img src="${json[i].image}">
                   `
                });
             })
          });
       });
 });
 });
 
 /* This block of code shows how to format the HTML once you fetch some planetary JSON!
 <h2>Mission Destination</h2>
 <ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
 </ol>
 <img src="${}">
 */
 