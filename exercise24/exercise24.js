// //More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Equality & Unequality tests
var st1 = "Hello";
var st2 = "hello";
console.log(st1 == st2);
console.log(st1 !== st2);
//Lower case function test
var t1 = "Hello World";
var t2 = "hello World";
console.log(t1.toLowerCase() == t2);
//NUmerical Test involves equality & unequality for greater than or less than, greater than or equal, less than or equal 
var num1 = 20;
var num2 = 10;
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//AND and OR operator test
var a = 10;
var b = 20;
var c = 30;
//both conditions are true
console.log(a < b && b < c);
//atleast one condition is true
console.log(a < b || b < c);
//both conditions are false
console.log(a > b && b > c);
//both conditions are false
console.log(a > b || b > c);
//Testing whether Item is in array?
var country = ['Turkey', 'Pakistan', 'Maldives', 'Saudi Arabia'];
console.log(country.includes('Maldives'));
console.log(country.includes('Dubai'));
//Testing whether item is not in array?
var color = ['Black', 'Pink', 'Blue'];
console.log(color.includes('Green'));
console.log(color.includes('Brown'));
