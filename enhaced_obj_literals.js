// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }
function createBookShop(inventory) {
  return {
    inventory, //inventory: inventory
    inventoryValue() {
      //inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      //priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eliquent Javascript", price: 15 }
];

const bookshop = createBookShop(inventory);

console.log(bookshop.inventoryValue());
console.log(bookshop.priceForTitle("Harry Potter"));

// exsample for jquery ajax
// function saveFile() {
//   $.ajax({
//     url,
//     data,
//     method: 'POST'
//   });
// }

// const url = "http://fileupload.com";
// const data = { color: 'red' };

// saveFile(url, data);

// Multiple Properties with Enhanced Notation
const red = "#ff0000";
const blue = "#0000ff";
const COLORS = { red, blue };

// Condensing Code with Enhanced Literals
const fields = ["firstName", "lastName", "phoneNumber"];
const props = { fields };

// Literals in Functions
const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
};

// Refactor to use enhanced literal notation
const color = "red";

const Car = {
  color,
  drive() {
    return "Vroom!";
  },
  getColor() {
    return this.color;
  }
};
