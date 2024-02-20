//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var placenames = ["Makkah", "Madina", "Iran", "Egypt", "Iraq"];
//Original Order
console.log("Original Order", placenames);
//Alphabetical Order
console.log("Alphabetical Order", placenames.sort());
//Showing array is still in original order
console.log("Still in original Order:", placenames);
//Reverse alphabetical order
console.log("Reverse alphabetical order:", placenames.sort().reverse());
//showing array is still in original order
console.log("Still in original order:", placenames);
//Reverse Order of Array
console.log("Reverse Order:", placenames.reverse());
//moving back array to its original position
console.log("Original order:", placenames.reverse());
//Sorting in alphabetical order
console.log("Alphabetical order:", placenames.sort());
//Reverse alphabetical order
console.log("Reverse alphabetical order:", placenames.reverse().sort());
