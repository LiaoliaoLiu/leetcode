/*
 * @lc app=leetcode id=704 lang=java
 *
 * [704] Binary Search
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;   
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] < target) l = mid+1;
            else r = mid;
        }

        return nums[l] == target ? l : -1;
    }
}
// @lc code=end

