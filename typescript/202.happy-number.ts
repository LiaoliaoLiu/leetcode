/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function squareSumOfDigits(n: number): number {
    let ret = 0;
    while (n > 0) {
        ret += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return ret;
}
function isHappy(n: number): boolean {
    const results = new Set<number>();
    while (n !== 1) {
        if (results.has(n)) return false;
        results.add(n);
        n = squareSumOfDigits(n);
    }

    return true;
};
// @lc code=end

