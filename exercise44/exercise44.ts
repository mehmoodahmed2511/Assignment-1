//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items:string[]):void{
    console.log("Sandwich summary: ");
    if(items.length==0){
        console.log("oops! your order is empty, please select some items");
    }
    else{
        items.forEach((items,i)=>{
            console.log(` ${i+1}.${items}`);
        })
    }
    console.log("\n");
}
//Each time,using different number of arguements
make_sandwich();
make_sandwich('Butter','Cheese','Tomato');
make_sandwich('Tomato','Lettuce');