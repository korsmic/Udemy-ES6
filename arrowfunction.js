// ES5
const addES5 = function(a, b) {
  return a + b;
};
console.log(addES5(1, 2));

// ES6
const addES6_1 = (a, b) => {
  return a + b;
};
console.log(addES6_1(1, 2));

// ES6 single line
const addES6_2 = (a, b) => a + b;
console.log(addES6_2(1, 2));

// exsample
const double = number => 2 * number;
console.log(double(8));

const numbers = [1, 2, 3];
const num = numbers.map(number => number * 2);
console.log(num);

// exsample2
// map関数などのarray helper function を使うとthisがなくなる為、
// 回避策として、() => で回避できる。
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    // this === team
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
console.log(team.teamSummary());

// Refactoring Keyword Functions
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Arrow Functions Aren't Always a Solution
const profile = {
  name: "Alex",
  getName: function() {
    return this.name;
  }
};
