function checkPalindrome(number) {
    let rev = 0;
    for (let i = number; Math.trunc(i) > 0; i /= 10) {
        rev = ((rev*10) + (Math.trunc(i)%10));
    }
    return (number===rev);
}

finalSum = 0
for (let x = 0; x < 10000; x++) {
    if(checkPalindrome(x)) {
        finalSum = finalSum + x;
    }
}
console.log(finalSum);