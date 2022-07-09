/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let idx1 = 0;
    let idx2 = numbers.length-1;
    while (idx1 < idx2) {
        let sum = numbers[idx1] + numbers[idx2];
        if (sum === target) return [idx1+1, idx2+1];
        else if (sum < target) idx1 += 1;
        else idx2 -= 1;
    }
};
// @lc code=end

