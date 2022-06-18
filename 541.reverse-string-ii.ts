/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */


// @lc code=start
function reverseStr(s: string, k: number): string {
    let i = 0;
    const sArr = s.split('');
    while (i < s.length){
        let left = i;
        let right = (i + k - 1) < s.length ? i + k - i : s.length-1;
        while (left < right) {
            sArr[left] = s.charAt(right);
            sArr[right] = s.charAt(left);
            left += 1;
            right -= 1;
        }
        i += 2 * k;
    }

    return sArr.join('');
};
// @lc code=end

