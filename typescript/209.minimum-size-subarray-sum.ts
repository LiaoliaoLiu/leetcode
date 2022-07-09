/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 */


// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    for (let right = 0; right < nums.length; right+=1) {
        sum += nums[right];
        // 1 1 1 1 1 1000
        // ^   ->  ^
        while (sum >= target) {
            let currentLength = right - left + 1;
            // I initialize it as 0, so it would be always 0;
            minLength = currentLength < minLength ? currentLength : minLength;
            sum -= nums[left];
            left += 1;
        }
    }

    return minLength == Number.MAX_SAFE_INTEGER ? 0 : minLength;
};
// @lc code=end

