class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "v6", 'red');
      case "honda":
        return new Car(5, "v6", "white");
    }
  }
}



let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} is doing Vroom`);
  },
};

Object.assign(Car.prototype, carMixin);

const carFactory = new CarFactory()

const autoManufacturer = (type, model) => {
    switch (type) {
      case "car":
        return carFactory.createCar(model);
      case "suv":
        return suvFactory.createSuv(model);
    }
  };

  const hrv = autoManufacturer('car', 'civic')

  hrv.revEngine()
