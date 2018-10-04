// ES5
function getMessageES5() {
  const year = new Date().getFullYear();

  return "ES5 The year is " + year;
}
console.log(getMessageES5());

// ES6
function getMessageES6() {
  return `ES6 The year is ${new Date().getFullYear()}`;
}
console.log(getMessageES6());

// sample template string
const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{ "device_id" : "${device_id}", "guid" : "${guid}", "username" : "${username}" }`;
console.log(data);

// sample template year
const year = 2016;
const yearMessage = `${year}`;
console.log(yearMessage);

// Template Strings in Practice
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
console.log(doubleMessage(3));

// Name Helpers
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("James", "Kojima"));
