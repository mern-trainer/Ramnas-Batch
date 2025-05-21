// const filter = (arr, callbackFunc) => {
//     for (let i = 0; i < arr.length; i++){
//         callbackFunc(arr[i], i, arr)
//     }
// }


// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// filter(arr, display)

// callback function => A function passed as an arg. to another function

// map, filter, reduce - find, findIndex

// filter => returns a new array with all elements that pass the test implemented by the provided function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const res = array.filter((value) => {
    return value % 2 == 0
}) // 0 - array.length

// console.log(res);

// map => Returns a new array with the results of calling a function for every array element
// => Array manipulation
// => Length of the new array is the same as the length of the original array

// const arr = [100, 201, 300, 401, 500, 601, 700, 801, 900, 1000]

// const result = arr.map(function (value) {
//     // if (value % 2 == 0) {
//     //     return value * 10
//     // }
//     // return value
//     return value % 2 == 0
// })

// console.log(result);

// reduce => Returns the result of a function that is called for every element in the array

const arr = [1, 2, 3, 4, 5, 6];

const response = arr.reduce((prevTotal, value) => {
    if (value % 2 == 0) {
        return prevTotal + value
    }
    return prevTotal
}, 0)

// console.log(response);

const fruits = ['apple', 'banana', 'orange', 'mango', 'grapes', 'pineapple'];

const res1 = fruits.map((fruit) => {
    return fruit.replace(fruit[0], fruit[0].toUpperCase())
})

// console.log(res1);

const string = fruits.reduce((prev, value) => prev + value, "");

// console.log(string);

// object => Set of key value pairs

// const obj = {
//     name: "John",
//     age: 21,
//     city: "New York",
//     state: "NY",
//     country: "USA",
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: "10001"
//     },
//     phone: "123-456-7890",
//     tags: ["developer", "programmer", "coder"]
// }

// obj.name = "John Doe"
// obj.age = 22
// obj.address.state = "CA"
// obj.tags[1] = "developer"

// console.log(obj);

// const username = obj.name
// const age = obj.age
// const zip = obj.address.zip
// const programmer = obj.tags[1]

// console.log(username, age, zip, programmer);

// destructuring => extracting data from an object

// array, object

// destructure, spread, rest
// spread => spread operator => ... 
    // => used to spread elements of an array or properties of an object 
    // => used to copy elements of an array or properties of an object
// rest => rest operator => ...
    // => used to get the remaining elements of an array or properties of an object

const students = ["John", "Jane", "Jack", "Jill", "Joe", "Jen"]

// const students2 = [...students] // reference, value

// students2.push("Alex")

// console.log(students2, students);

const [st1, st2, ...remainingStudents] = students

console.log(st1, remainingStudents);



// console.log(student1, student2, student3);

const obj = {
    name: "John",
    age: 21,
    city: "New York",
    state: "NY",
    country: "USA",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    phone: "123-456-7890",
    tags: ["developer", "programmer", "coder"]
}

const obj2 = {...obj}

obj2.age = 30

console.log(obj, obj2);

const { name, city, address, ...remainingData } = obj

console.log(name, city, address, remainingData);


// map, filter, reduce


const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Jack", age: 30 },
    { id: 4, name: "Jill", age: 35 },
    { id: 5, name: "Joe", age: 40 },
    { id: 6, name: "Jen", age: 45 }
]

const filteredUsers = users.filter((user) => {
    // return user.age > 25 && user.age < 45
    return user.name.startsWith("Ja")
})

console.log(filteredUsers);

const mappedUsers = users.map((user) => {
    user.age += 1
    return user
})

console.log(mappedUsers);

const sum = users.reduce((prev, user) => prev + user.age, 0)

console.log(sum / users.length);