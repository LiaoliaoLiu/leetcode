/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    function prefixFunction(s: string): number[] {
        let pi: number[] = [];
        pi[0] = 0;
        let k = 0;
        for (let q = 1; q < s.length; q += 1) {
            while (k > 0 && s.charAt(k) !== s.charAt(q)) {
                k = pi[k-1];
            }
            if (s.charAt(k) === s.charAt(q)) k += 1;
            pi[q] = k;
        }
        return pi;
    }
    // 0 1 2 3 4 5
    // a b c a b c
    // 0 0 0 1 2 3
    let pi = prefixFunction(s);
    let possiblePeriod = s.length - pi[s.length-1]; // 3

    if (possiblePeriod <= Math.floor(s.length / 2)) {
        return s.length % possiblePeriod === 0;
    } else return false;
};
// @lc code=end

