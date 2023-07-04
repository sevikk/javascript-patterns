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
        return new Car(4, "v6", red);
      case "honda":
        return new Car(5, "v6", "white");
    }
  }
}

class Suv {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case "cx5":
        return new Car(4, "v6", red);
      case "hrv":
        return new Car(5, "v6", "white");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSuv(model);
  }
};

const hrv = autoManufacturer('suv', 'hrv')

console.log(hrv);
