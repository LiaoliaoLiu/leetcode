/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0, right = s.length-1;
    while (left < right) {
        // swap two chars
        let tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left += 1;
        right -= 1;
    }
};
// @lc code=end

