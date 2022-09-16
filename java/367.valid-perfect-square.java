/*
 * @lc app=leetcode id=367 lang=java
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
class Solution {
    public boolean isPerfectSquare(int num) {
        int l = 1, r = num;
        while (l < r) {
            int mid = l + (r - l) / 2;
            long square = (long) mid * mid;
            if (square < num) l = mid + 1;
            else r = mid;
        }

        return l * l == num;
    }
}
// @lc code=end

