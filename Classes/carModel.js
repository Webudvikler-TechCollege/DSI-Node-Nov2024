export class Car {
	constructor(brand, year) {
		this.brand = brand;
		this.year = year;
	}

	present() {
		console.log(`Min bil er en ${this.brand} fra ${this.year}`);
		
	}
}

