//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var list = ["Land Cruiser V8", "Mercedese", "Freed"];
var i = 0;
for (i = 0; i < list.length; i++) {
    console.log("I would like to buy a", list[i]);
    list[i + 1];
}
