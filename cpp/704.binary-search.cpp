/*
 * @lc app=leetcode id=704 lang=cpp
 *
 * [704] Binary Search
 */

// @lc code=start
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0, r = nums.size(), mid;
        while (l < r) {
            mid = l + ((r - l) >> 1);
            if (nums[mid] < target) l = mid + 1;
            else r = mid;
        }

        return (l == nums.size() || nums[l] != target) ? -1 : l;
    }
};
// @lc code=end

