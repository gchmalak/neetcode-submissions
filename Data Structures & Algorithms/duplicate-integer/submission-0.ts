class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
   let duplicateVal = false;
   const iteration= new Set<number>()
   for(const num of nums){
    if(iteration.has(num)){
        duplicateVal = true;
    }else{
        iteration.add(num)
    }
   }
 return duplicateVal;
    }
}
