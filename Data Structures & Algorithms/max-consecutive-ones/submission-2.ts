class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMaxConsecutiveOnes(nums: number[]): number {
        let currentCount =0;
        let maxCount = 0;
        for( const num of nums ){
if(num === 1){
    currentCount++;
    
   maxCount = Math.max(maxCount, currentCount)
}else{
    currentCount =0
}
        }
   
return maxCount;
    }
}
