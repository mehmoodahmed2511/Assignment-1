//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var list = ["Faraz", "Ali Hassan", "Saad", "Sultan"];
var j = 0;
for (j = 0; j < list.length; j++) {
    console.log(list[j], "You are invited to come for the dinner");
    list[j + 1];
}
