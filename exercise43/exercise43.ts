//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicianNames:string[]=['Tymal','Overton','Rilee','Tucker'];
function show_magicians(magicians:string[]):void
{
    for(const magician of magicians){
        console.log(magician);
    }
}
function make_great(magicians:string[]):string[] {
    const greatmagicians:string[] = magicians.map(magician => `The great ${magician}`);
    return greatmagicians;
}
//Adding "add" to each magician name
const greatmagicianNames:string[]=make_great(magicianNames);

//calling function to see original magicains
console.log("Original Magicians: ");
show_magicians(magicianNames);

//calling function to see great magicians
console.log("Great Magicians: ");
show_magicians(greatmagicianNames);