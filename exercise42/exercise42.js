//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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
var greatmagicianNames = make_great(magicianNames);
//calling function to see original magicains
console.log("Original Magicians: ");
show_magicians(magicianNames);
//calling function to see great magicians
console.log("Great Magicians: ");
show_magicians(greatmagicianNames);
