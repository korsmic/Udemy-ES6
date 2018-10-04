class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); //Car.constructor();
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title: "Daily Driver" });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
