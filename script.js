// Write your JavaScript code here!
window.addEventListener("load", function() {
   //Giving the launch info the ol' razzle dazzle:
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.style.alignContent = "center";
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[5].name}</li>
         <li>Diameter: ${json[5].diameter}</li>
         <li>Star: ${json[5].star}</li>
         <li>Distance from Earth: ${json[5].distance}</li>
         <li>Number of Moons: ${json[5].moons}</li>
      </ol>
      <img src= "${json[5].image}">`;
         });
   });   
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      //All the variables!  Here they are!
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      let pilotStatusUpdate = document.getElementById("pilotStatus");
      let copilotStatusUpdate = document.getElementById("copilotStatus");
      let fuelStatusUpdate = document.getElementById("fuelStatus");
      let cargoStatusUpdate = document.getElementById("cargoStatus");
      let faultyItemsUpdate = document.querySelector("#faultyItems");
      let launchStatusUpdate = document.getElementById("launchStatus");

      //First let's make sure all the fields are filled out:
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("You cannot leave any field blank!");
         event.preventDefault();

      //Now let's make sure actual strings are used for the pilot and copilot names:   
      } else if (isNaN(pilotNameInput.value) == false || isNaN(coPilotNameInput.value) == false) {
         alert("You must enter a valid name - no numbers! (Unless your name is Tech N9ne)");
         //It's nice to make a local KC reference and show the hometown some love.
         event.preventDefault();
      
      //Now let's make sure the fuel level and cargo mass ARE numbers and contain no letters:   
      } else if (isNaN(fuelLevelInput.value) == true || isNaN(cargoMassInput.value) == true) {
         alert("Fuel Level and Cargo Mass must be numbers!");
         event.preventDefault();


      /*Now that we have valid inputs, let's move on!
      We need to make sure there is enough fuel and not too much weight for takeoff:*/   
      } else {
         //These are the 4 variables for "faultyItems" 
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is Ready`;
         copilotStatusUpdate.innerHTML = `Copilot ${coPilotNameInput.value} is Ready`;
         fuelStatusUpdate.innerHTML = `${fuelLevelInput.value} liters of fuel`;
         cargoStatusUpdate.innerHTML = `${cargoMassInput.value} kilograms of cargo`;
         
         //Let's make sure there is enough fuel, and warn if there is not:
         if (fuelLevelInput.value < 10000) {
            faultyItemsUpdate.style.visibility = "visible";
            fuelStatusUpdate.innerHTML = `${fuelLevelInput.value} liters is not enough fuel for the journey! You need at least 10,000 liters!`;
            launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
            launchStatusUpdate.style.color = "red";
         
         //Now we need to make sure there isn't too much weight
         } else if (cargoMassInput.value > 1000) {
            faultyItemsUpdate.style.visibility = "visible";
            cargoStatusUpdate.innerHTML = `${cargoMassInput.value} kilograms is too much weight for the shuttle to take off!  The cargo mass must be less than 10,000 kilograms!`;
            launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
            launchStatusUpdate.style.color = "red";
         
         //It doesn't seem to catch if both are wrong, and I know this a logic issue and I'm not sure how to resolve it. :(  
      
      //If it *is* ready for launch:
      } else {
         faultyItemsUpdate.style.visibility = "visible";
         launchStatusUpdate.innerHTML = "Shuttle is ready for launch";
         launchStatusUpdate.style.color = "green";
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is Ready`;
         copilotStatusUpdate.innerHTML = `Copilot ${coPilotNameInput.value} is Ready`;
         fuelStatusUpdate.innerHTML = `${fuelLevelInput.value} liters of fuel`;
         cargoStatusUpdate.innerHTML = `${cargoMassInput.value} kilograms of cargo`;
      }
      event.preventDefault();
      }
   });

/*This block of code shows how to format the HTML once you fetch some planetary JSON!
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