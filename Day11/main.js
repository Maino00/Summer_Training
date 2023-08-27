// Task 1
let a = prompt('Enter the value of the first variable');
let b = prompt('Enter the value of the second variable');
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);


// Task 2
var array = [];
var size = Number(prompt('Enter the size of the array'));
      for (let a = 0; a < size; a++) {
         array[a] = prompt('Enter the array Element ' + (a + 1));
      }
      var Max_array = Math.max(...array);
      document.write("Array and its values are: ");
      document.write(array);
document.write("<br>");
      document.write("The maximum value in the array is: ");
document.write(Max_array);
document.write("<br>");

      var Min_array = Math.min(...array);
      document.write("The minimum value in the array is: ");
document.write(Min_array);
      

// Task 3
// 1:
var fruits = ["apple", "strawberry", "banana", "orange",
    "mango"];
const isStringsArray = fruits => fruits.every(i => typeof i === "string");
console.log(isStringsArray(fruits));

// 2:
result = fruits.find((el) => el.includes("a"));
console.log(result);

// 3:
var fruits_2 = fruits.filter((fruit) => fruit.includes('b') || fruit.includes('s'));
console.log(fruits_2);

// 4:
var msg = fruits.map((el) => {
  return `I love ${el} `;
});
console.log(msg);
