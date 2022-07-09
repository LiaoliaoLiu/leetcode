/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const elementToFrequency = new Map<number, number>();
    for (let n of nums) {
        elementToFrequency.set(n, (elementToFrequency.get(n) || 0) + 1);
    }

    return [...elementToFrequency.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(a => a[0]);
};
// @lc code=end

