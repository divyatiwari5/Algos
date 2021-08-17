/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = nums1.concat(nums2);
    let median = 0;
    for (var i=0; i<nums3.length; i++) {
        for (var j=i; j<nums3.length; j++) {
            if (nums3[i]>nums3[j]) {
                var temp = nums3[i];
                nums3[i] = nums3[j];
                nums3[j] = temp;
            }
        }
    }

    if(nums3.length % 2 === 0) {
        half = nums3.length/2;
        median = (nums3[half-1]+nums3[half])/2;
    } else {
        half = Math.floor(nums3.length/2);
        console.log({half});
        median = nums3[half];
    }

    console.log({nums3}, {median});
};


nums1 = [0,0,2,8];
nums2= [1,3,4];
findMedianSortedArrays(nums1, nums2);