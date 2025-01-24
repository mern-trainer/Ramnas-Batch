// recursion => function that calls itself
// => used to solve complex problems in a simple way
// => used to solve problems that cannot be solved using iteration

// let i = 0
// const counter = () => {
//     if (i == 2) {
//         return 10;
//     }
//     // console.log(i);
//     i++
//     return counter()
// }

// // Call Stack maximum size exceeded

// console.log(counter());

// counter() => return 0 => 0
// counter() => return 0 => 1
// counter() => return 0

// Hello => olleH

// rev("Hello") => "olleH"
// rev("ello") => "olle"
// rev("llo") => "oll"
// rev("lo") => "ol"
// rev("o") => "o"
// rev("") => return ""

// const rev = (str="") => {
//     if (str == "") {
//         return ""
//     }
//     return rev(str.slice(1)) + str.charAt(0)
// }

// console.log(rev("Hello"));

// recursion => function that calls itself

const sum = (n) => {
    if (n == 1) {
        return 1
    }
    return n + sum(n - 1)
}

console.log(sum(30))

// 3 => 3 + sum(2)
// 2 => 2 + sum(1)
// 1 => 1


const is_palindrome = (number, rev=0, temp=number) => {
    if(temp <= 0){
        return rev == number
    }
    const reverse = rev * 10 + (temp % 10)
    const newTemp = parseInt(temp/10)
    return is_palindrome(number, reverse, newTemp)
}

console.log(is_palindrome(123))

// closure => function that has access to the variables of its parent function even after the parent function has closed

// remove duplicates from an array

// =>

const array = [1, 2, 3, 4, 2, 3, 21, 2, 3, 2, 1, 2, 3, 6];

const removeDuplicates = (arr=[]) => {
    const res = arr.filter((element, index) => arr.indexOf(element) == index)
    console.log(res);
}

removeDuplicates(array)