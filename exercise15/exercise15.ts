//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guests=["Faraz","Ali Hassan","Saad","Sultan"];
let removeguest="Saad";
let newguest="Abdul Qadir";
let j=0;
guests[guests.indexOf(removeguest)]=newguest;
for(j=0; j<guests.length; j++){
    console.log(guests[j],"You are invited to come for the dinner");
    guests[j+1];
}

