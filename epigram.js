function calculateSum(paragraph) {
    let sum=0;

    let vowels = [ "a", "A", "e", "E", "I", "O", "U", "i", "o", "u" ];

    for (var i=0; i<paragraph.length; i++) {
        let currentChar = paragraph[i];
        if (!(/[a-zA-Z]/).test(currentChar)) {
            continue;
        } 
        let asciiVal = String(paragraph).charCodeAt(i);
        if (vowels.includes(currentChar)) {
            asciiVal = -asciiVal;
        }
        sum += asciiVal;
    }

    return sum;

} 

console.log(calculateSum("Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve."));