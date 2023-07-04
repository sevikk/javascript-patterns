let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
        return instance
    }
  }
}

// class Suv extends Car {
//   constructor(doors, engine, color) {
//     super(doors, engine, color);
//     this.wheel = 4;
//   }
// }

const civic = new Car(4, "V6", "grey");
const honda = new Car(2, 'v3', 'red');
// const cx5 = new Suv(4, 'V8', 'red')
console.log(civic);
console.log(honda)
