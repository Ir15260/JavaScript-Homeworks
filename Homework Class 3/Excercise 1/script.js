function printType(parameter) {
    var type = typeof parameter;
    console.log("Type of input:", type);
}

printType({});
printType(true);
printType(123);
printType("Hello");
printType(undefined);
