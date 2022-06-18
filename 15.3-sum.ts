/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function twoSum(nums: number[], i: number, results: number[][]): number[][] {
    let left = i+1;
    let right = nums.length - 1;
    while (left < right) {

        const sum = nums[left] + nums[right] + nums[i];
        if (sum < 0) {
            left += 1;
        } else if (sum > 0) {
            right -= 1;
        } else {
            results.push([nums[i], nums[left], nums[right]]);
            left += 1;
            right -= 1;
            while (left < right && nums[left] === nums[left-1]) left += 1;
        }

        // -3 1 1 1 1 1 2
    }
    return results;
}
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const results: number[][] = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        twoSum(nums, i, results);
    }
    return results;
};
// @lc code=end

