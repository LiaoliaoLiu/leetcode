/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    // ( ([{}])
    // ([{ ]})
    // ([{}]) )
    let stack: string[] = [];
    for (let i = 0; i < s.length; i += 1) {
        const curr = s.charAt(i);
        if (curr === '(') stack.push(')');
        else if (curr === '[') stack.push(']');
        else if (curr === '{') stack.push('}');
        else if (stack.length === 0 || curr !== stack[stack.length-1]) {
            return false;
        } else {
            stack.pop();
        }
    }

    return stack.length === 0;
};
// @lc code=end

