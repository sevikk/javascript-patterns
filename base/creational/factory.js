class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic': return new Car(4, 'v6', red)
            case 'honda': return new Car(5, 'v6', 'white')
        }
    }
}

const factory = new CarFactory();
const honda = factory.createCar('honda');
console.log(honda);