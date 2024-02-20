//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    return console.log("Size: ".concat(size, ",Message: ").concat(message));
}
//Large size shirt with default message
make_shirt();
//Medium size shirt with default message
make_shirt("Medium");
//Any size shirt with different message
make_shirt("Small", "You should also love typescript");
