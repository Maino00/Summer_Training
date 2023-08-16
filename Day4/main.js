document.writeln("<h2>Task 1:</h2>");
document.writeln("<p>Number(): takes one parameter and it can be string and converts it to number, if the string couldn’t be converted to a number => it returns NaN.</p>");
document.writeln("<p>ParseInt(): it parses a string and converts it an integer, it takes two parameters(string, radix), the radix specifies the base of the number, if the function couldn’t convert the first character to a number => it returns NaN.</p>");
document.writeln("<p>ParseFloat(): it parses a string and converts it a float, it takes one parameter(string), if the function couldn’t convert the first character to a number => it returns NaN.</p>");
document.writeln("<hr>");


document.writeln("<h2>Task 2:</h2>");
var arr = [1, 2, 3, 4, 5];
document.writeln(arr);
document.writeln("<h3>Sort ascending:</h3>");
var sortedAsc = arr.sort();
document.writeln(sortedAsc);
document.writeln("<h3>Sort descending:</h3>");
var sortedDes = arr.sort().reverse();
document.writeln(sortedDes);
document.writeln("<h3>Sum of array values:</h3>");
    var sum = 0;
for (var i = 0; i < arr.length; i++){
    sum += arr[i];
}
document.writeln(sum);
document.writeln("<hr>");


// document.writeln("<h2>Task 3:</h2>");
// var str = prompt("Enter a string:");
// var chr = prompt("Enter a character:");
// document.writeln("<h3>The string entered by the user:</h3>");
// document.writeln(str);
// document.writeln("<h3>The character entered by the user:</h3>");
// document.writeln(chr);
// let count1 = 0;
// let count2 = 0;
// for (var i = 0; i < str.length; i++){
//     if (str[i] == 'e') { 
//         count1++;
//     }
// }
// for (var i = 0; i < chr.length; i++){
//     if (chr[i] == 'e') { 
//         count2++;
//     }
// }
// document.writeln("<h3>The number of 'e':</h3>");
// document.writeln(count1+count2);
// document.writeln("<hr>");


document.writeln("<h2>Task 4:</h2>");
var str2 = prompt("Enter a word:");
var num = Number(prompt("Enter a number"));
document.writeln("<h3>The string entered by the user:</h3>");
document.writeln(str2);
document.writeln("<h3>The number entered by the user:</h3>");
document.writeln(num);
document.writeln("<h3>The word printed repeated in number:</h3>")
for (var i = 1; i <= num; i++) {
    document.writeln(str2);
}
// I couldn’t do the last task
