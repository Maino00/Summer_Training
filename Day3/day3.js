console.log("hello");
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);

var num1 = 88;
if (num1 >= 0) {
    console.log("The number you entered is positive");
} else {
    console.log("The number you entered is negative");
}
if (num1 % 2 == 0) {
    console.log("The number you entered is even");
} else {
    console.log("The number you entered is odd");
}

var num2 = 5;
if (num2 % 3 == 0) {
    console.log("fizz");
} else if (num2 % 5 == 0) {
    console.log("buzz");
} else if (num2 % 3 == 0 && num2 % 5 == 0) {
    console.log("Fizz Buzz")
}
else {
    console.log("the number is divisble by none ");
}
