// javascript =>
// variable => container to store data values
// keywords => pre reserved words
// identifiers => user defined names => variable names, function names
// functions => block of code or set of instructions to perform task
// string => collection of characters
// array => collection of items or elements

// static typing => type checking is done at compile time
// dynamic typing => type checking is done at run time

// DOM => document object model => tree structure => manipulate html elements, styles, handle events using js
// => DOM is a programming interface for web documents

// array methods

// push => add element at the end
// pop => remove element from the end
// shift => remove element from the beginning
// unshift => add element at the beginning

// string methods

// indexOf => returns the index of the first occurrence of a specified value in a string
// length => returns the length of a string
// slice => returns a section of a string

// advanced topics =>

// callback function, application
    
// syncronous => one task after another / line by line execution of code
// asynchronous => multiple tasks at the same time

// callback function => function passed as an argument to another function

function display(value) {
    console.log(value)
}

function sum(num1, num2, callbackFunc) {
    const r = num1 + num2
    callbackFunc(r)
}

sum(10, 50, display)

// Higher order function (sum) => function that takes another function as an argument
// first order function (display) => function passed as an argument to another function








