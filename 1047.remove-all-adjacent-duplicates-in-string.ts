/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
function removeDuplicates(s: string): string {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i += 1) {
        let curr = s.charAt(i);
        if (stack.length === 0 || stack[stack.length-1] !== curr) {
            stack.push(curr);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
};
// @lc code=end

