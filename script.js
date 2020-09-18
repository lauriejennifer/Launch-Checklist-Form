// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      let pilotStatusUpdate = document.getElementById("pilotStatus");
      let copilotStatusUpdate = document.getElementById("copilotStatus");
      let fuelStatusUpdate = document.getElementById("fuelStatus");
      let cargoStatusUpdate = document.getElementById("cargoStatus");
      let faultyItemsUpdate = document.querySelector("#faultyItems");
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("You cannot leave any field blank!");
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) == false || isNan(coPilotNameInput.value) == false) {
         alert("You must enter a valid name - no numbers! (Sorry, Tech N9ne)");
         //It actually only counts as a number if it is all numbers (it does allow letters and numbers), but it's nice to make a local KC reference and show the hometown some love.
         event.preventDefault();
      } else if (isNan(fuelLevelInput.value) == true || isNan(cargoMassInput.value) == true) {
         //WHY IS THIS NOT WORKING, BUT THE PREVIOUS NaN else if FOR NAMES DOES???
         alert("Fuel Level and Cargo Mass must be numbers!");
         event.preventDefault();
      } else if (fuelLevelInput.value < 10000) {
         faultyItemsUpdate.style.visibility = "visible";
         //WHY IS THIS NOT WORKING?? IT NEVER IS VISIBLE!!! IT JUST SUBMITS AND NOTHING CHANGES!!!
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatusUpdate.innerHTML = `Copilot ${coPilotNameInput.value} Ready`;
         fuelStatusUpdate.innerHTML = `${fuelLevelInput.value} liters is not enough fuel for the journey! You need at least 10,000 liters!`;
         cargoStatusUpdate.innerHTML = cargoMassInput.value;
      } else if (cargoMassInput.value > 1000) {
         faultyItemsUpdate.style.visibility = "visible";
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatusUpdate.innerHTML = `Copilot ${coPilotNameInput.value} Ready`;
         fuelStatusUpdate.innerHTML = fuelLevelInput.value;
         cargoStatusUpdate.innerHTML = `${cargoMassInput.value} kilograms is too much weight for the shuttle to take off!  The cargo mass must be less than 10,000 kilograms!`;
      }
         
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

});