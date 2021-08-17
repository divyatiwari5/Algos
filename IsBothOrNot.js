process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('', number => {
    calculateDivisibility(number);
    readline.close();
})
function calculateDivisibility(number) {
    if (number%5 === 0 && number%11 === 0) { 
        console.log("TWO");
    } else if((number%5===0 && number%11!==0) || (number%5!==0 && number%11===0)){
        console.log("ONE");
    } else {
        console.log("NONE");
    }
}