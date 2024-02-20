//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

const usernames: string[]=['admin','Abrar','Saud','Amir'];
function greetUsers(usernames:string[]): void{
   
    for(const i in usernames){
        if(usernames[i].toLowerCase()=='admin'){
            console.log('Hello admin! would you like to see a status report?');
        }
        else{
            console.log(`Hello ${usernames[i]}, Thank you for logging in again`);
    }
   
}
}

//Empty array
console.log('for non-empty username:')
greetUsers(usernames);

console.log('for empty username:')
greetUsers(usernames);
export{};