/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let numberValue = 0



numberEl.addEventListener('input', (event) => {
    numberValue = event.target.value;
    //console.log(`You entered: ${numberValue}`)
})

convertBtn.addEventListener('click', function(){
   let convertedToFeet = numberValue * 3.281; // Perform your calculation
   let convertedToMeters = numberValue / 3.281;
    let convertedLenghth =(`${numberValue} Meters = ${convertedToFeet.toFixed(3)} Feet ||
          ${numberValue} Feet = ${convertedToMeters.toFixed(3)} Meters`);
    lengthEl.innerHTML = convertedLenghth
    
    let convertedToLiter = numberValue / 0.264
    let convertedToGallon = numberValue * 0.264
    let convertedVolume =(`${numberValue} Gallons = ${convertedToLiter.toFixed(3)} liters 
    || ${numberValue} liters = ${convertedToGallon.toFixed(3)} Gallons`);
    volumeEl.innerHTML = convertedVolume
    
    
   let convertedToKilo = numberValue / 2.204
    let convertedToLbs = numberValue * 2.204
    let convertedMass =(`${numberValue} Pounds = ${convertedToKilo.toFixed(3)} Kilos 
    || ${numberValue} Kilos = ${convertedToLbs.toFixed(3)} Pounds`);
   massEl.innerHTML=convertedMass 
})
