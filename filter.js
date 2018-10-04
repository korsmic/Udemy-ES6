var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];
var filterdProducts = [];

// for
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filterdProducts.push(products[i]);
  }
}

console.log(filterdProducts);

// fliter
var filter1 = products.filter(function(product) {
  return product.type === "vegetable";
});

console.log("filter1: ", filter1);

// Type is 'vegetable', quantity is than 0, price is less than 10
var filter2 = products.filter(function(product) {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});

console.log("filter2: ", filter2);

// post exsample
var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awsome post" },
  { postId: 5, content: "it was ok" },
  { postId: 4, content: "hello there" }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

var foo = commentsForPost(post, comments);
console.log(foo);

// Filtering Values
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});

console.log(filteredNumbers);

// Handling Permissions with Filter
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

var filteredUsers = users.filter(function(user) {
  return user.admin === true;
});

console.log(filteredUsers);

// Challenging! Implementing 'reject'.
function reject(array, iteratorFunction) {
  return array.filter(function(element) {
    return !iteratorFunction(element);
  });
}
