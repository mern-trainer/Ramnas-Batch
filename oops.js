// oops => Object Oriented Programming system

// class => template or blueprint for creating objects.
// objects => instances of a class or real world entities.

// const obj = {
//     name: "John",
//     age: 21
// }

// Object()

// class

// constructor function => used to create objects.
// It is a special function that is called when an object is created.
// It is used to initialize the properties of the object.

// Properties => variables that belong to an object.
// Methods => functions that belong to an object.

// 4 pillers of oops => Abstraction, encapsulation, inheritance, polymorphism

// Inheritance => A class can inherit properties and methods from another class.
// Polymorphism => A class can have multiple forms.
    // overloading => multiple functions with the same name but different parameters.
    // overriding => multiple functions with the same name and same parameters.
// Abstraction => Hiding the implementation details or unnecessary details of a class.
// Encapsulation => wrapping the data and code in a single unit.
// Access modifiers => public, private
    
// static typing => type checking is done at compile time
// dynamic typing => type checking is done at run time

class College{

    #collegeName;

    constructor(collegeName) {
        this.#collegeName = collegeName
    }

    displayCollege() {
        console.log(this.#collegeName);
    }

}

// inheritance + polymorphism
class Student extends College{

    #studentName;

    constructor(collegeName, studentName) {
        super(collegeName)
        this.#studentName = studentName
    }


    displayStudent() {
        console.log(this.#studentName);
    }

    // @overriding
    displayCollege() {
        super.displayCollege()
        console.log("This is a child class");
    }
}

const obj = new Student("KGPTC", "Alex")

// console.log(obj.collegeName);

obj.displayCollege()
obj.displayStudent()

// new => Memory allocation
// this => reference to the current object => Global object

// Inheritance => A class can inherit properties and methods from another class.

// single inheritance => a class can inherit properties and methods from a single parent class.
// multiple inheritance => a class can inherit properties and methods from multiple parent classes.
// hybrid inheritance => a class can inherit properties and methods from both single and multiple parent classes.
// multilevel inheritance => a class can inherit properties and methods from a parent class and the parent class can inherit properties and methods from another parent class.
// hierarchical inheritance => a class can inherit properties and methods from multiple parent classes.

const arr = [8,9]

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        const number = digits[i] + 1
        if (number < 10) {
            digits[i] = number
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};

console.log(plusOne(arr));

import weather from "weather-js"

weather.find({ search: "Kozhikode", degreeType: "C" }, function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
});