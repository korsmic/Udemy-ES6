// ES5
// var name = 'Jane';
// var title = 'Software Engineer';
// var hourWage = 40;

// ES6
const name = "Jane";
let title = "Software Engineer";
let hourWage = 40;

console.log("name: ", name);
console.log("title: ", title);
console.log("hourWage: ", hourWage);

// some time later...
title = "Senior Software Engineer";
hourWage = 45;

console.log("name: ", name);
console.log("title: ", title);
console.log("hourWage: ", hourWage);

// A Constant Exercise of Letting Variables Be Variables
// Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
// Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.

const aname = "jane";
let age = 20;
const dateOfBirth = "10/10/2010";

// Const/Let Refactoring
let statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" }
];
let message = "";
const currentCode = "OK";

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
