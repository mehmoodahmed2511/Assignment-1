// //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users=['Danish','Shakeel','Faisal','Taha'];
const new_users=['Shabbir','Mudassir','Taha','Saad'];

function checkUsernames(current_users:string[], new_users:string[]): void{
    let lowercaseCurrentUsers=current_users.map(user=> user.toLowerCase());
    for(const newUser of new_users){
        const lowercasedNewUser=newUser.toLowerCase()
        if(lowercaseCurrentUsers.includes(lowercasedNewUser)){
            console.log(`username "${newUser}" is already taken. Please enter a new username`);
        }
        else{
            console.log(`username "${newUser}" is available`);
        }
    }
}
checkUsernames(current_users, new_users);