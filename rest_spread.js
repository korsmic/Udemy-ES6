// sample ...
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// sample concaat and spread
const defaultColors = ["red", "greeen"];
const userFavoritColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

const concatColors = defaultColors.concat(userFavoritColors);
console.log("concatColors: ", concatColors);

const spreadColors = [
  "blue",
  "green",
  ...fallColors,
  ...defaultColors,
  ...userFavoritColors
];
console.log("spreadColors: ", spreadColors);

// sample
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
}
console.log(validateShoppingList("orange", "bread", "eggs"));

// Math Sample
const MathLibrary = {
  calcuateProduct(...rest) {
    console.log("Please use the multipy method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

A = MathLibrary.calcuateProduct(5, 4);
console.log(A);

// --------
// Many, Many Arguments
// --------
function product(a, b, c, d, e) {
  var numbers = [a, b, c, d, e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}
// --------
// Solution 引数に何個でも入れられる。
// --------
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}
const Solution = product(1, 2, 3, 4, 5, 6, 7);
console.log("Solution: ", Solution);
// --------

// --------
// Spreadin' Arrays
// --------
function join(array1, array2) {
  return array1.concat(array2);
}

// --------
// Solution concatを...に置き換える
// --------
function join(array1, array2) {
  return [...array1, ...array2];
}
const Join = join([1, 2, 3], [4, 5, 6, 7, 8, 9]);
console.log("Join: ", Join);

// --------
// Mixing Rest and Spread
// --------
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}
const UNSHIFT = unshift([1, 2, 3, 4, 5], 1, 2, 3, 4, 5, 6, 7);
console.log("UNSHIFT: ", UNSHIFT);
