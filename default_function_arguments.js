function makeAjaxReques(url, method = "GET") {
  return method;

  // logic to make the request
}

console.log(makeAjaxReques("google.com", null));
console.log(makeAjaxReques("google.com", undefined));
console.log(makeAjaxReques("google.com", "GET"));

// exsample2
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}
const user = new User(generateId());
// console.log(createAdminUser(new User(generateId())));
console.log(createAdminUser(user));

// Using Default Arguments
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0;
//   }

//   if (b === undefined) {
//     b = 0;
//   }

//   return a + b;
// }
function sum(a = 0, b = 0) {
  return a + b;
}

// Dumping Unused Code
// function addOffset(style) {
//   if (!style) {
//     style = {};
//   }

//   style.offset = '10px';

//   return style;
// }

const addOffset = (style = {}) => {
  style.offset = "10px";

  return style;
};
