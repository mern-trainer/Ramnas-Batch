// // callback function => a function that is passed as an argument to another function

// // **********************************************************************

// function display() {
//   console.log("Display function called");
// }

// function myFunction(callbackFunc) {
//   callbackFunc();
// }

// myFunction(display);

// // **********************************************************************

// function display(value) {
//   console.log(value);
// }

// function sum(a, b, callbackFunc) {
//   const r = a + b;
//   callbackFunc(r);
// }

// sum(10, 20, display);

// // **********************************************************************

// // map, filter

// // array filter => returns a new array containing elements that pass a test

// const arr = [20, 56, 38, 29, 10, 64, 89, 45, 32, 96];
// const array = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "grape",
//   "honeydew",
//   "kiwi",
//   "lemon",
// ];

// const res = arr.filter(function (element) {
//   return element % 2 == 0;
// });

// const res2 = array.filter(function (element) {
//   return element.length > 5;
// });

// console.log(res2);

// // array map => returns a new array with the results of calling a function for every element in the original array
// // map => array manipulation

// const result = arr.map(function (element) {
//   if (element % 2 == 0) {
//     return element * 2;
//   }
//   return element;
// });

// console.log(result);

// const res3 = array.map(function (element) {
//   return element.toUpperCase();
// });

// console.log(res3);

// // **************************************************************************

// // reduce, find, findIndex

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // reduce => returns a single value from an array by applying a specified function to each element in the array

// // let s = 0
// // for (let i = 0; i < arr.length; i++){
// //     s += arr[i]
// // }
// // console.log(s);

// // const sum = arr.reduce(function (prev, element) {
// //     return prev * element
// // }, 1)
// // console.log(sum);

// // find => returns the first element in an array that matches a specified condition
// // findIndex => returns the index of the first element in an array that matches a specified condition

// // const res4 = arr2.find(function (element) {
// //     return element == 5
// // })

// // console.log(res4);

// // const res5 = arr2.findIndex(function (element) {
// //     return element == 5
// // })

// // console.log(res5);

// // oops => out of place operations

// // array => A collection of elements
// // object => A collection of key-value pairs

// // const obj = {
// //     name: "Arjun",
// //     age: 20,
// //     place: "Mavoor"
// // }

// // obj.city = "Kozhikode"

// // console.log(obj);

// // OOP => Object Oriented Programming

// // class => Template or Blueprint for creating objects
// // object => Instance of a class
// //              Can be created using the new keyword
// //              Can create multiple objects of the same class
// // keywords => Pre reserved words

// // camelCase => firstName
// // PascalCase => FirstName

// // constructor function => Special function that is called when an object is created
// // Attributes / Properties / Variables => Properties of an object
// // Methods => Functions that are associated with an object

// class Vehicle {
//   constructor(number) {
//     this.number = number;
//   }

//   display() {
//     console.log(this.number);
//   }
// }

// const obj1 = new Vehicle(1000); // creating object using new keyword and constructor function, initializing attributes of the object using constructor function

// obj1.display(); // invoking method of the object

// // new keyword => memory allocation
// // this => points to the current object
// // this => global object

// // 4 pillars of OOP

// // Encapsulation => Data hiding / binding data into a single unit
// // Abstraction => Hiding the implementation details or unnecessary details
// // Inheritance => Reusing the code => Extending properties and methods from a parent class
// // Polymorphism => Multiple forms => Different ways of doing the same thing
// // overloading => Same name different arguments
// // overriding => Same name same arguments but different implementation

// // class Parent{

// //     #data; // private variable
// //     constructor(value) {
// //         this.value = value
// //         this.#data = value    // assigned to private variable
// //     }

// //     display() {
// //         return this.value
// //     }

// //     call_private() { // invoking private variable
// //         return this.#data
// //     }
// // }

// // class Child extends Parent{ // inheriting properties and methods from parent class using extends keyword
// //     //@override
// //     display() { // overrided method from parent
// //         return this.value * 2
// //     }

// //     parentDisplay() {
// //         console.log(super.display()); // invoking parent method from child class using super keyword.
// //     }
// // }

// // const obj = new Child(1990)

// // const response = obj.display() // return value of display method

// // obj.parentDisplay() // invoking parentDisplay method

// // console.log(response);

// const obj = {
//   name: "Arjun",
//   age: 20,
//   address: {
//     city: "Kozhikode",
//     state: "Kerala",
//     country: "India",
//   },
//   degree: ["B.Tech", "M.Tech", "MBA"],
//   marks: {
//     physics: 80,
//     chemistry: 90,
//     biology: 85,
//   },
// };

// const fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "grape",
//   "honeydew",
//   "kiwi",
//   "lemon",
// ];

// // destructuring => extracting data from an object or array

// // const apple = fruits[0]
// // const banana = fruits[1]
// // const cherry = fruits[2]
// // const date = fruits[3]
// // const elderberry = fruits[4]
// // const fig = fruits[5]
// // const grape = fruits[6]
// // const honeydew = fruits[7]
// // const kiwi = fruits[8]
// // const lemon = fruits[9]

// const [a, b, c] = fruits;

// console.log(a, b, c);

// // const age = obj.age
// // const name = obj.name
// // const address = obj.address
// // const city = address.city

// // console.log(age, name, address, city);

// const { age, name: username } = obj; // alias

// console.log(age, username);

// // spread operator => ... => copying data from one object or array to another.
// // rest operator => ... => extracting remaining data from an object or array

// const arr1 = [1, 2, 3];
// const arr3 = [...arr1]; // pass by reference => pass by value
// arr3.push(4);
// console.log(arr1, arr3);

// const userObj = {
//   name: "Arjun",
// };

// const secondObj = { ...userObj };

// secondObj.age = 20;

// console.log(userObj, secondObj);

// const students = ["Alex", "Rahul", "Amal", "Ramesh", "Raju"];

// const [student1, student2, ...remainingStudents] = students;

// console.log(student1, student2, remainingStudents);

// const { address, marks, ...remainingData } = obj;

// console.log(remainingData);

// // destructure, spread, rest

// // 1. Merge 2 arrays

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // const mergedArray = array1.concat(array2)
// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);

// // map. filter. reduce

// const users = [
//   { name: "Alex", age: 21, salary: 30000 },
//   { name: "Amal", age: 20, salary: 50000 },
//   { name: "Aswin", age: 30, salary: 20000},
//   { name: "Rahul", age: 25, salary: 35000},
//   { name: "Midhun", age: 20, salary: 70000},
// ];

// const filteredData = users.filter(function (user) {
//     return user.salary < 50000
// })

// console.log(filteredData);

// const mappedData = users.map(function (user) {
//     if (user.age == 20) {
//         // user.salary = 1_00_000
//         // return user
//         return {...user, slry: 1_00_000}
//     }
//     return user
// })

// console.log(mappedData);

// const avgOfAges = users.reduce(function (prev, user) {
//   return prev + user.salary
// }, 0)

// const avg = avgOfAges / users.length

// console.log(avg);

// promise, async await

// callback function => a function that is passed as an argument to another function

// promise => Promise is an object that represents the eventual completion or failure of an asynchronous operation.
          // => Promise is the way to handle asynchronous operations in JavaScript.
// async => an asynchronous function is a function that returns a Promise object.
// await => await keyword is used to pause the execution of the code until the promise is resolved.

