var twoSum = function(nums, target) {

    let map = new Map();
    for (var i=0; i<nums.length; i++) {
        map[nums[i]] = i;
    }
   for (var i=0; i<nums.length; i++) {
       var secondNumber = target - nums[i];

       if(map.hasOwnProperty(secondNumber) && map[secondNumber] != i) {
        console.log(i, map[secondNumber]);
        return
       }
    }
    throw new IllegalArgumentException("No two sum solution");
    
};

twoSum([21,7,70, 3, 2], 9);