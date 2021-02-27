console.log("result");

//Piping Functions using Reduce
const pipe = (...functions) => m => functions.reduce((prev, curr) => curr(prev), m);

//Functions to Pipe. 
const multiTwo = (number) => number * 2;
const multiThree = (number) => number * 3;
const multiFour = (number) => number * 4;
const multiFive = (number) => number * 5;


const allMultiplications = pipe(multiTwo, multiThree, multiFour, multiFive);

console.log(allMultiplications(20));

