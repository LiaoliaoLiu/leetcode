#
# @lc app=leetcode id=977 lang=python3
#
# [977] Squares of a Sorted Array
#

# @lc code=start
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        ret = [0] * len(nums)
        lo, hi = 0, len(nums)-1
        for i in range(len(nums)-1, -1, -1):
            if abs(nums[lo]) > abs(nums[hi]):
                ret[i] = nums[lo]**2
                lo += 1
            else:
                ret[i] = nums[hi]**2
                hi -= 1
        return ret
        
# @lc code=end

