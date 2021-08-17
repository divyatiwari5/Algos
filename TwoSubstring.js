var lengthOfLongestSubstring = function(s) {
    let count=0;
    let highestcount = 0;
    let longestString = '';
    let str = '';
    for (i=0; i<s.length; i++) {
        let next = i+1;
        if (s[i] !== s[next]) {
            str = str + s[i];
            count++;
        } else {
            if (count > highestcount) {
                highestcount = count+1;
                longestString = str+s[i];
            }
            count = 0;
            str = '';
        }
    }
    if (count > highestcount) {
        highestcount = count;
        longestString = str;
    }
    console.log(highestcount);
    console.log(longestString);
};

var lengthOfLongestSubstringNonRepeateable = function(s) {
    let i=0;
    let ans=0;
    let mapState={};
    
    for (var j=0; j<s.length; j++) {
        if (mapState.hasOwnProperty(s[j])) {
            console.log({mapState});
            i=Math.max(mapState[s[j]], i);
        }
        ans = Math.max(ans, j-i+1);
        mapState[s[j]]=j+1;
    }
    console.log({ans});
    return ans;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstringNonRepeateable("abcabcabcde");