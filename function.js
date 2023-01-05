function getFileSity(fileName) {
  let request = new XMLHttpRequest();
  request.open("GET", fileName, false);
  request.send(null);
  return JSON.parse(request.responseText);
}

var animals = getFileSity("animals.json");

const numOfPigsLegs = animals.pigs * 4;
const numOfChickensLegs = animals.chickens * 2;
const numOfCowsLegs = animals.cows * 4;

const result = numOfChickensLegs + numOfCowsLegs + numOfPigsLegs;

console.log(result);
