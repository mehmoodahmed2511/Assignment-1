//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt=(size:string, message:string):void=>
{
    console.log(`Size:${size}, Message:${message}`)
}
//Calling function
let size:string="Large";
let message:string="IK is last hope";
//Prinitng statement
make_shirt(size,message);
make_shirt("Medium","Be confident");