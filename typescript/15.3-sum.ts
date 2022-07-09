/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    function twoSum(nums: number[], i: number, results: number[][]) {
        let left = i+1, right = nums.length-1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < ) left += 1;
            else if (sum > 0) right -= 1;
            else {
                results.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (nums[left] === nums[left-1]) left += 1;
            }
        }
    }
    nums.sort((a, b) => a-b);
    let results: number[][] = [];
    for (let i = 0; i < nums.length; i += 1) {
        // fix nums[i] and do a two sum
        while (i > 0 && nums[i] === nums[i-1]) i += 1;
        twoSum(nums, i, results);
    }

    return results;
};
// @lc code=end

