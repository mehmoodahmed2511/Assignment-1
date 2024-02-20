// //More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//Equality & Unequality tests
const st1:string="Hello";
const st2:string="hello";
console.log(st1==st2);
console.log(st1!==st2);

//Lower case function test
const t1:string = "Hello World";
const t2:string = "hello World";
console.log(t1.toLowerCase() == t2);


//NUmerical Test involves equality & unequality for greater than or less than, greater than or equal, less than or equal 
const num1:number = 20;
const num2:number = 10;

console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//AND and OR operator test
const a:number=10;
const b:number=20;
const c:number=30;
//both conditions are true
console.log(a<b && b<c)

//atleast one condition is true
console.log(a<b || b<c)

//both conditions are false
console.log(a>b && b>c)

//both conditions are false
console.log(a>b || b>c)

//Testing whether Item is in array?
const country:string[]=['Turkey','Pakistan','Maldives','Saudi Arabia'];
console.log(country.includes('Maldives'));
console.log(country.includes('Dubai'));

//Testing whether item is not in array?
const color:string[]=['Black','Pink','Blue'];
console.log(color.includes('Green'));
console.log(color.includes('Brown'));