var colors = ["red", "blue", "green"];

// ES5 for
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6 forEach
colors.forEach(function(color) {
  console.log(color);
});

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
console.log(sum);

// Moving Away from For Loops
function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  posts.forEach(function(post) {
    savePost(post);
  });
}

// Processing Values
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

// pushで値をarrayとして追加していく。
images.forEach(function(image) {
  areas.push(image.height * image.width);
});

console.log(areas);
