//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests=["Faraz","Ali Hassan","Saad","Sultan"];
let removeguest="Saad";
let newguests="Imran";
let i=0;
//replacing guest
guests[guests.indexOf(removeguest)]=newguests;
console.log(guests);
guests.map((items) => console.log(`Dear ${items}, I've arranged a bigger table, so I've invited more people.`));
//Adding new guest in beginning
let guestbeg="Hussain";
guests.unshift(guestbeg);
console.log(guests);
//Adding new guest in middle
let guestmid="Shaheen";
let indexmid=guests.length/2;
guests.splice(indexmid,0,guestmid)
console.log(guests);
//Adding new guest in end
guests.push("Umar");
console.log(guests);
//Printing new invitation message to each person
guests.map((items => console.log(`Dear ${items}, I invite you to please come for dinner at my home`)));