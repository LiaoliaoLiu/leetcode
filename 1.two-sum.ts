/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let complementToPos = new Map<number, number>();

    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i];
        if (complementToPos.has(current)) return [complementToPos.get(current), i];

        const complement = target - current;
        complementToPos.set(complement, i);
    }

    return [-1. -1];
};
// @lc code=end

