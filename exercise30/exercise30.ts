//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let username=["Admin","Denly","Cadmore","Roy","Overton"];
let i=0;
for(i=0; i<username.length; i++){
    if(username[i]=="Admin"){
        console.log("Hello Admin!, would you like to see a status report?");
    }
    else{
        console.log("Hello",username[i],"Thank you for logging in again")
    }
    username[i+1];
}
