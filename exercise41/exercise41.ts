//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicianNames:string[]=['Tymal','Overton','Rilee','Tucker'];
function show_magicians(magicians:string[]):void
{
    for(const items of magicians){
        console.log(items);
    }
}

//magician names function
show_magicians(magicianNames);