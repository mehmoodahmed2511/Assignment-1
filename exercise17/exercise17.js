//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var guests = ["Faraz", "Ali Hassan", "Saad", "Sultan"];
var removeguest = "Saad";
var newguests = "Imran";
var i = 0;
//replacing guest
guests[guests.indexOf(removeguest)] = newguests;
console.log(guests);
guests.map(function (items) { return console.log("Dear ".concat(items, ", I've arranged a bigger table, so I've invited more people.")); });
//Adding new guest in beginning
var guestbeg = "Hussain";
guests.unshift(guestbeg);
console.log(guests);
//Adding new guest in middle
var guestmid = "Shaheen";
var indexmid = guests.length / 2;
guests.splice(indexmid, 0, guestmid);
console.log(guests);
//Adding new guest in end
guests.push("Umar");
console.log(guests);
//Printing new invitation message to each person
guests.map((function (items) { return console.log("Dear ".concat(items, ", I invite you to please come for dinner at my home")); }));
console.log("You can invite only two people for dinner");
while (guests.length > 2) {
    var guestremoved = guests.pop();
    console.log("Sorry ".concat(guestremoved, ", we can't invite you for dinner"));
}
//Inviting those two people
var finalguests = ["Hussain", "Faraz"];
for (i = 0; i < finalguests.length; i++) {
    console.log("Dear", finalguests[i], "You are still invited to come for dinner");
    guests[i + 1];
}
//Removing these two people from list
finalguests.pop();
console.log(finalguests);
finalguests.pop();
console.log(finalguests);
