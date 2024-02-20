//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// // "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

var city_country = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
//Calling three city and country names
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Misissauga", "Canada"));
console.log(city_country("Mumbai", "India"));
