// Destructuring

var expense = {
  type: "Business",
  amount: "$45 USD"
};

// ES5
var ES5type = expense.type;
var ES5amount = expense.amount;
console.log("ES5type", ES5type);
console.log("ES5amount", ES5amount);

// ES6
// 宣言は、初期と同プロパティ名でなければならない。
const { type, amount, name } = expense;
console.log("ES6type", type);
console.log("ES6amount", amount);

// Exsample
var saveFiled = {
  extention: "jpg",
  name: "repost",
  size: 14040
};

// ES5
function ES5fileSummary(file) {
  return `The file ${file.name}.${file.extention} is of size ${file.size}`;
}
console.log("ES5fileSummary: ", ES5fileSummary(saveFiled));

// ES6
function ES6fileSummary({ name, extention, size }, { color }) {
  return `${color} The file ${name}.${extention} is of size ${size}`;
}
// console.log('ES6fileSummary: ', ES6fileSummary(saveFiled));
console.log("ES6fileSummary: ", ES6fileSummary(saveFiled, { color: "red" }));

// Exsample2
const companies = ["Google", "Facebook", "Uber"];

const [ES6Name1, ES6Name2, ES6Name3, ES6Name4] = companies;
console.log("ES6Name1: ", ES6Name1);
const ES5Name1 = companies[0];
console.log("ES5Name1: ", ES5Name1);
const [...ES6rest] = companies;
console.log(ES6rest);

// Exsample3
const companies2 = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];

const [{ location }] = companies2;
console.log("location: ", location);

// Exsample4
const Google = {
  location2: ["Moutain View", "New York", "London"]
};
// const { location2: [location3] } = Google;
// console.log('location2: ', location2);

const { location2: [location3] } = Google;
console.log("location3: ", location3);

// Exsample5
function signup({ username, password, email, dateOfBirth, city }) {
  // create new user
  console.log("username: ", username);
  console.log("password: ", password);
  console.log("email: ", email);
  console.log("dateOfBirth: ", dateOfBirth);
  console.log("city: ", city);
}

const user = {
  username: "myname",
  password: "mypassword",
  email: "myemail@exsample.com",
  dateOfBirth: "1/1/1900",
  city: "New York"
};

signup(user);

// Exsample6

const points = [[4, 5], [10, 1], [0, 40]];

points.map(pair => {
  const [x, y] = pair;
  console.log(pair);
});

points.map(([x, y]) => {
  console.log({ x, y });
  return { x, y };
});

// Destructuring in Practices

const profile = {
  title: "Engineer",
  department: "Engineering"
};

function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer(profile));

// Array Destructuring in Practice
const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);

// Recursion with Destructuring
const numbers = [1, 2, 3];
let finalResults = [];

function double(numbers) {
  const [number, ...rest] = numbers;
  if (number === undefined) {
    return finalResults;
  } else {
    finalResults.push(number * 2);
    return double([...rest]);
  }
}
