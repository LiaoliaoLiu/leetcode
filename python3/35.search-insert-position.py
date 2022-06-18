#
# @lc app=leetcode id=35 lang=python3
#
# [35] Search Insert Position
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums)-1
        while lo < hi:
            mi = lo + (hi - lo) // 2
            if target > nums[mi]: lo = mi + 1
            else: hi = mi
        return lo if nums[lo] >= target else len(nums)
            
        
# @lc code=end