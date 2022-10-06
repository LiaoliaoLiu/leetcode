/*
 * @lc app=leetcode id=15 lang=cpp
 *
 * [15] 3Sum
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        vector<vector<int>> result;
        for(int i = 0; i < nums.size(); i++) {
            while (i > 0 && i < nums.size()-1 && nums[i] == nums[i-1]) i++;
            twoSum(&nums[i+1], &*(nums.end()-1), -nums[i], result);
        }
        return result;
    }

private:
    void twoSum(int *l, int *r, int target, vector<vector<int>> &result) {
        while (l < r) {
            auto sum = (long) *l + *r;
            if (sum < target) l++;
            else if (sum > target) r--;
            else {
                result.push_back({-target, *l, *r});
                l++;
                r--;
                while (l < r && *l == *(l-1)) l++;
            }
        }
    }
};
// @lc code=end

