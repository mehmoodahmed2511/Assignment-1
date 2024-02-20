//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicianNames = ['Tymal', 'Overton', 'Rilee', 'Tucker'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatmagicians = magicians.map(function (magician) { return "The great ".concat(magician); });
    return greatmagicians;
}
//Adding "add" to each magician name
var greatmagicianNames = make_great(magicianNames);
//calling function to see original magicains
console.log("Original Magicians: ");
show_magicians(magicianNames);
//calling function to see great magicians
console.log("Great Magicians: ");
show_magicians(greatmagicianNames);
