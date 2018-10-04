var numbers = [1, 2, 3];
var forDouble = [];

for (var i = 0; i < numbers.length; i++) {
  forDouble.push(numbers[i] * 2);
}
console.log(forDouble);

var mapDoubled = numbers.map(function(number) {
  return number * 2;
});
console.log(mapDoubled);

var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" }
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

// Plucking Values
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" }
];

var heights = images.map(function(image) {
  return image.height;
});

console.log(heights);

// Calculating Values with Map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time;
});

console.log(speeds);

// Really Hard - Implementing 'Pluck'
// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.

// Example:

// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

// Hint:

// Remember that you can access a property on an object by using square bracket notation. For example...

// var person = { name: 'Bill' };
// person['name'] // returns 'Bill'

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

function pluck(paints, property) {
  return paints.map(paint => {
    return paint[property];
  });
}

pluck(paints, "color"); // pass the array and property you want to use
