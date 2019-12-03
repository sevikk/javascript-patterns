### Composite

The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

A tree control is a perfect example of a Composite pattern. The nodes of the tree either contain an individual object (leaf node) or a group of objects (a subtree of nodes).

All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.

```js
class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
}

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(3000);
	}
}

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(4000);
	}
}

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
}

class Car extends Composite {
	constructor() {
		super();
		this.setName('Audi');
	}
}
```