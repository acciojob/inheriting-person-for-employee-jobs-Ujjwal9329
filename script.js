// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Employee Class (Inheriting from Person)
class Employee extends Person { // ✅ Added 'extends Person'
    constructor(name, age, jobTitle) {
        super(name, age); // ✅ Correctly calls the parent constructor
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
