### Flyweight

The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.

Essentially Flyweight is an 'object normalization technique' in which common properties are factored out into shared flyweight objects. (Note: the idea is similar to data model normalization, a process in which the modeler attempts to minimize redundancy).

An example of the Flyweight Pattern is within the JavaScript engine itself which maintains a list of immutable strings that are shared across the application.

Other examples include characters and line-styles in a word processor, or 'digit receivers' in a public switched telephone network application. You will find flyweights mostly in utility type applications such as word processors, graphics programs, and network apps; they are less often used in data-driven business type applications.

```js
function Flyweight (make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};
 
var FlyWeightFactory = (function () {
    var flyweights = {};
 
    return {
 
        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = 
                    new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },
 
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();
 
function ComputerCollection () {
    var computers = {};
    var count = 0;
 
    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] = 
                new Computer(make, model, processor, memory, tag);
            count++;
        },
 
        get: function (tag) {
            return computers[tag];
        },
 
        getCount: function () {
            return count;
        }
    };
}
 
var Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}
 
// log helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var computers = new ComputerCollection();
    
    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");
 
    log.add("Computers: " + computers.getCount());
    log.add("Flyweights: " + FlyWeightFactory.getCount());
    log.show();
}
```

more simply

```js
class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
        console.count('model');  // console counter
		this.models[name] = new Auto(name);
		return this.models[name];
	}

    getModels() {
        console.table(this.models);
    }
};

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels())
```