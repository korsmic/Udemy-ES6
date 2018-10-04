var numbers = [10, 20, 30];
var sumFor = 0;
var sumReduce = 0;

// for exsample
for (var i = 0; i < numbers.length; i++) {
  sumFor += numbers[i];
}
console.log("sumFor: ", sumFor);

// reduce exsample
numbers.reduce(function(sumReduce, number) {
  console.log("sumReduce: ", sumReduce);
  return sumReduce + number;
}, 0);

// primaryColors
var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  console.log(previous);
  return previous;
}, []);

// balancedParens
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

var exsample1 = balancedParens("()");
var exsample2 = balancedParens("(((");
var exsample3 = balancedParens(")(");
console.log("'()': ", exsample1); // true
console.log("'(((': ", exsample2); // false
console.log("')(': ", exsample3); // false

// Distance Traveled
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip) {
  return previous + trip.distance;
}, 0);

// Reducing Properties
var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" }
];

var deskTypes = desks.reduce(
  function(previous, desk) {
    if (desk.type === "sitting") {
      previous.sitting++;
    }
    if (desk.type === "standing") {
      previous.standing++;
    }
    return previous;
  },
  { sitting: 0, standing: 0 }
);

// Hardmode: Custom 'Unique' Helper
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((previous, item) => {
    if (!previous.find(prev => prev === item)) previous.push(item);
    return previous;
  }, []);
}

unique(numbers);
