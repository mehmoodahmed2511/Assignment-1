//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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

const greatmagicianNames:string[]=make_great(magicianNames);

//calling function to see original magicains
console.log("Original Magicians: ");
show_magicians(magicianNames);

//calling function to see great magicians
console.log("Great Magicians: ");
show_magicians(greatmagicianNames);
