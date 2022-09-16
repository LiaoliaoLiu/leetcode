/*
 * @lc app=leetcode id=34 lang=java
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
class Solution {
    private int lowerBound(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] < target) l = mid + 1;
            else r = mid;
        }

        return (l == nums.length || nums[l] != target) ? -1 : l;
    }
    private int upperBound(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] <= target) l = mid + 1;
            else r = mid;
        }

        return (l == 0 || nums[l-1] != target) ? -1 : l-1;
    }

    public int[] searchRange(int[] nums, int target) {
        return new int[]{lowerBound(nums, target), upperBound(nums, target)};
    }
}
// @lc code=end

