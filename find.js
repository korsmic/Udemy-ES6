var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];
var user;

// for
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Alex") {
    user = users[i];
    break;
  }
}
console.log(user);

// find
var findUser = users.find(function(user) {
  return user.name === "Alex";
});
console.log("findUser: ", findUser);

// Car exsample
function Car(model) {
  this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Foucus")];

var findCars = cars.find(function(car) {
  return car.model === "Foucus";
});

console.log("findCars: ", findCars);

// Post exsample
var posts = [{ id: 1, title: "New Post" }, { id: 2, title: "Old Post" }];

var comment = { postId: 1, comment: "Great Post" };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log("postForComment: ", postForComment(posts, comment));

// Finding Admin Users
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var findAdmin = users.find(function(user) {
  return user.admin === true;
});

console.log("findAdmin: ", findAdmin);

// What's Your Balance?
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var findAccount = accounts.find(function(account) {
  return account.balance === 12;
});

console.log("findAccount: ", findAccount);

// Really Challenging: Custom findWhere Helper
var ladders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];
function findWhere(array, criteria) {
  return array.find(function(arrObj) {
    return arrObj.height === criteria.height;
  });
}
console.log(findWhere(ladders, { height: 25 }));
