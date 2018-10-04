var computers = [
  { name: "Apple", ram: 24 },
  { name: "compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

// for
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}
console.log("allComputersCanRunProgram: ", allComputersCanRunProgram);
console.log("onlySomeComputersCanRunProgram: ", onlySomeComputersCanRunProgram);

// every helper
// A && B && C && = false or true
var everyComputer = computers.every(function(computer) {
  return computer.ram > 16;
});
console.log("everyComputer: ", everyComputer);

// some helper
// A || B || C || = false or true
var someComputer = computers.some(function(computer) {
  return computer.ram > 16;
});
console.log("someComputer: ", someComputer);

// every and some exsample
var names = ["Alexandria", "Matthew", "Joe"];

var everyName = names.every(function(name) {
  return name.length > 4;
});
console.log("everyName: ", everyName);

var someName = names.some(function(name) {
  return name.length > 4;
});
console.log("someName: ", someName);

// form Field exsample
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("2cool");
var username = new Field("my_password");
var birthdate = new Field("10/10/2010");

var fields = [username, username, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // allow user to submit
  console.log("formIsValid: ", formIsValid);
} else {
  // show ana error message
  console.log("error message");
}

// Finding Submitted Users
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
  return user.hasSubmitted;
});

console.log("hasSubmitted: ", hasSubmitted);

// In Progress Network Requests
var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" }
];

var inProgress = requests.some(function(request) {
  return request.status === "pending";
});

console.log("inProgress: ", inProgress);
