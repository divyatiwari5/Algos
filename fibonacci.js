let n1 = 0, n2 = 1;
let lastNumber = 10000
let sumOfAll = n1 + n2
let nextTerm = n1 + n2;

while (nextTerm < lastNumber) {
    if (nextTerm % 2 !== 0){
        sumOfAll = sumOfAll + nextTerm;
    }
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
console.log(sumOfAll);
