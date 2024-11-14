export class Student {
	constructor(firstname, lastname, gender, age) {
		this.firstname = firstname
		this.lastname = lastname
		this.gender = gender
		this.age = age
	}

	present = () => {
		console.log(this.firstname,this.lastname)
	}

	getAge = () => {
		console.log(this.age)
	}
}