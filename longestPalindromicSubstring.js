var longestPalindrome = function(s) {
    let pallindromic;
    let longestPalindrome='';
    for (var i=0; i<s.length; i++) {
        pallindromic = s[i];
        for (var j=i+1; j<s.length; j++) {
            pallindromic = pallindromic.concat(s[j]);
            if (s[i]===s[j]) {
                console.log(s[i], s[j]);
                let length = pallindromic.length;
                console.log({length});
                let f = 0;
                let l = length - 1;
                let isPal = false;

                while (l>=1) {
                    if (pallindromic[f++] !== pallindromic[l--]) {
                        isPal = false;
                        break;    
                    } else {
                        isPal = true;
                    }
                }
                if (isPal) {
                    if (pallindromic.length > longestPalindrome.length) {
                        longestPalindrome = pallindromic;
                    }
                }   
            }
        }
        if (longestPalindrome.length === 0) {
            pallindromic = s[0];
            longestPalindrome = pallindromic;
        }
    }
    console.log({longestPalindrome}, longestPalindrome.length);
};

longestPalindrome("caaac");