// Game Classes
// class Monster {
//   constructor({ name }){
//    this.health = 100;
//    this.name = name;
//   }
// }

// const monster = new Monster({name: 'Pokemon'});
// console.log(monster);

// Subclassing Monsters
class Monster {
  constructor({ name }) {
    this.name = name;
    this.health = 100;
  }
}
class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    return (snake.health -= 10);
  }
}
const snake1 = new Snake({ name: "rattler" });
const snake2 = new Snake({ name: "copperhead" });
snake1.bite(snake1);
console.log(snake1);
snake2.bite(snake2);
snake2.bite(snake2);
snake2.bite(snake2);
console.log(snake2);

// Subclassing Monsters
