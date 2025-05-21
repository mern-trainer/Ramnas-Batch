// Palindrome

const isPalindrome = (num) => {
    let tempNumber = num
    let rev = 0;
    while (tempNumber > 0) {
        let lastDigit = tempNumber % 10;
        rev = rev * 10 + lastDigit; // 321
        tempNumber = parseInt(tempNumber / 10) // Math.floor(tempNumber / 10)
    }
    return rev == num
}

// 0=> 3
// 120

// console.log(isPalindrome(1234321));

const isArmstrongNumber = (num=153) => {
    const len = num.toString().length
    let sum = 0
    let tempNumber = num
    while (tempNumber > 0) {
        let lastDigit = tempNumber % 10; // 1
        sum += lastDigit ** len // Math.pow(lastDigit, len) // 27 + 125 = 152 + 1 = 153
        tempNumber = parseInt(tempNumber / 10) // 1
    }
    return num == sum
}

console.log(isArmstrongNumber(54748));