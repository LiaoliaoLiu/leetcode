/*
 * @lc app=leetcode id=69 lang=java
 *
 * [69] Sqrt(x)
 */

// @lc code=start
class Solution {
    public int mySqrt(int x) {
        int l = 0, r = x;
        while (l < r) {
            int mid = l + (r - l) / 2;
            long square = (long) mid * mid;
            if (square <= x) l = mid + 1;
            else r = mid;
        }

        return (l == 0 || l == 1) ? l : l-1;
    }
}
// @lc code=end

