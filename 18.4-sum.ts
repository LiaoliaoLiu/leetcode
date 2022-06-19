/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */


// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    function twoSum(nums: number[], i,j,target:number, results: number[][]) {
        let left = j+1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[j] + nums[left] + nums[right];
            if (sum < target) left += 1;
            else if (sum > target) right -= 1;
            else {
                results.push([nums[i], nums[j], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (nums[left] === nums[left-1]) left += 1;
            }
        }
    }

    nums.sort((a,b) => a-b);
    let results: number[][] = [];
    for (let i = 0; i < nums.length; i += 1) {
        while (i > 0 && nums[i] === nums[i-1]) i += 1;
        for (let j = i+1; j < nums.length; j += 1) {
            while (j > i+1 && nums[j] === nums[j-1]) j += 1;
            twoSum(nums, i, j, target, results) 
        }
    }

    return results;
};
// @lc code=end

