const totalMiles = 1500;
const fuelCostPerGallon = 3;

const slowMileage = 30;
const slowSpeed = 55;
const slowGallonsUsed = totalMiles / slowMileage;
const slowTime = totalMiles / slowSpeed;
const slowPrice = slowGallonsUsed * fuelCostPerGallon;

const mediumMileage = 28;
const mediumSpeed = 60;
const mediumGallonsUsed = totalMiles / mediumMileage;
const mediumTime = totalMiles / mediumSpeed;
const mediumPrice = mediumGallonsUsed * fuelCostPerGallon;

const fastMileage = 23;
const fastSpeed = 75;
const fastGallonsUsed = totalMiles / fastMileage;
const fastTime = totalMiles / fastSpeed;
const fastPrice = fastGallonsUsed * fuelCostPerGallon;

const budget = 175;

const slowResult = `
  Distance: ${totalMiles} miles 
  Speed: ${slowSpeed} mph 
  Fuel Needed: ${slowGallonsUsed} gallons 
  Time: ${slowTime} hours 
  Cost: $${slowPrice} 
  Can we afford it? ${slowPrice <= budget}
  `;

const mediumResult = `
  Distance: ${totalMiles} miles 
  Speed: ${mediumSpeed} mph 
  Fuel Needed: ${mediumGallonsUsed} gallons 
  Time: ${mediumTime} hours 
  Cost: $${mediumPrice} 
  Can we afford it? ${mediumPrice <= budget}
  `;

const fastResult = `
  Distance: ${totalMiles} miles 
  Speed: ${fastSpeed} mph 
  Fuel Needed: ${fastGallonsUsed} gallons 
  Time: ${fastTime} hours 
  Cost: $${fastPrice} 
  Can we afford it? ${fastPrice <= budget}
  `;

console.log(slowResult);
console.log(mediumResult);
console.log(fastResult);
