//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

var guests = ["Faraz", "Ali Hassan", "Saad", "Sultan"];
var removeguest = "Saad";
var newguest = "Abdul Qadir";
var j = 0;
guests[guests.indexOf(removeguest)] = newguest;
for (j = 0; j < guests.length; j++) {
    console.log(guests[j], "You are invited to come for the dinner");
    guests[j + 1];
}
console.log("Invited people are:", guests.length);
