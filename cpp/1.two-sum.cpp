/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */

// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::sort(nums.begin(), nums.end());
        int l = 0, r = nums.size() - 1;
        while (l < r) {
            auto sum = (long) nums[l] + nums[r];
            if (sum < target) l++;
            else if (sum > target) r--;
            else return {l, r};
        }
        return {-1, -1};
    }
};
// @lc code=end

