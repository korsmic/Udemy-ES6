// for of loop
// const colors = ['red', 'green', 'blue'];

// for (let color of colors) {
//   console.log(color);
// };

const numbers = [1, 2, 3, 4];

let total = 0;
for (let number of numbers) {
  total += number;
  console.log(total);
}

// generator
function* shopping() {
  // stuff on the sidewalk

  // walkng down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield "cash";
  // walking to laoundry place
  const cleaanClothes = yield "laundry";

  // walking back home
  return [stuffFromStore, cleaanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
// Walked into the store
// wlking up and down the aisles..
//purchease our stuff
console.log(gen.next("groceries")); // leaving the store
console.log(gen.next("cleaan clothes"));

// generator2
function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}
const gen2 = colors();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
console.log(myColors);

// generator3
const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function*() {
    yield this.lead; // testingTeam.lead
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);

// generator4
// when we will use this ?
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good commnet", []),
  new Comment("bad commnet", []),
  new Comment("neh", [])
];

const tree = new Comment("Great post!", children);

console.log(tree);

const values = [];
for (let value of tree) {
  values.push(value);
}

console.log(values);
