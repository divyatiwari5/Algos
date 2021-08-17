var convert = function(s, numRows) {
    let hashMap = {};
    let j=0;

    for (var i=0; i<s.length; i++) {
        if (j<numRows) {
            j++;
            if (hashMap[j]) {
                hashMap[j] = hashMap[j].concat(s[i]);
            } else {
                hashMap[j] = s[i];
            }
        } 
        if (j === numRows - 2) {
            j--;
            if (j>=0) {
                if (hashMap[j]) hashMap[j] = hashMap[j].concat(s[i]);
                else hashMap[j] = s[i];
            }
        }
    }
    console.log({hashMap});
};

convert("PAYPALISHIRING", 3);