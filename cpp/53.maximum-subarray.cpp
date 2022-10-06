/*
 * @lc app=leetcode id=53 lang=cpp
 *
 * [53] Maximum Subarray
 */

// @lc code=start
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_sum = std::numeric_limits<int>::min();
        for (int i = 0; i < nums.size(); i++) {
            int curr_sum = nums[i];
            for (int j = i+1; j < nums.size(); j++) {
                curr_sum += nums[j];
                max_sum = std::max(curr_sum, max_sum);
            }
            max_sum = std::max(curr_sum, max_sum);
        }

        return max_sum;
    }
};
// @lc code=end

