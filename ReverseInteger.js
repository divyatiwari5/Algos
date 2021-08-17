var reverse = function(x) {
   var rev = 0;
   while(x) {
       rev = (rev*10) + (x % 10);
       x=Math.floor(x/10);
       console.log({rev}, {x})
   }
};

reverse(321);
