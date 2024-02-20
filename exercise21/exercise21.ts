//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//This gives error
let student:{name string, rollno: number, fathername:string, contactno:number, age:number} = {name:"Mehmood Ahmed", rollno:38955, fathername:"Azeem", contactno:3182200629, age:21};
console.log(student);


//This is correct program
let student1:{name: string, rollno: number, fathername:string, contactno:number, age:number} = {name:"Mehmood Ahmed", rollno:38955, fathername:"Azeem", contactno:3182200629, age:21};
console.log(student1);