/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let leadingWhiteSpace = true;
    let sign;
    let num = '';
    let trimmedString = s.trimStart();

    for (var i=0; i<trimmedString.length; i++) {
        if (i===0) {
            if (trimmedString[i] === '-') {
                sign = '-';
            } else {
                sign = '+';
            }
        }
       if (sign ? i > 0 : i >=0) {
            if (!isNaN(trimmedString[i])) {
                num = num.concat(trimmedString[i]);
            } else {
                break;
            }
        }
    }

    if (sign === '-' && num > Math.pow(-2, 31)) {
        num = -num;
    } else if (num < Math.pow(2, 31) - 1) {
        num = +num;
    } else {
        num = 0;
    }
    console.log({num});

};

myAtoi("23");