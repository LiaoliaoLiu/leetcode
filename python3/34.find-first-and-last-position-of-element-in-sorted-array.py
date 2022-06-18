#
# @lc app=leetcode id=34 lang=python3
#
# [34] Find First and Last Position of Element in Sorted Array
#

# @lc code=start
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # def lower_bound():
        #     lo, hi = 0, len(nums)-1
        #     while lo < hi:
        #         mid = lo + (hi - lo) //2
        #         if target > nums[mid]: lo = mid + 1
        #         else: hi = mid
        #     return lo if nums[lo] == target else -1

        # def upper_bound():
        #     lo, hi = 0, len(nums)-1
        #     while lo < hi:
        #         mid = lo + (hi - lo) //2
        #         if target >= nums[mid]: lo = mid + 1
        #         else: hi = mid
        #     return -1 if (lo == 0 or nums[lo-1] != target) else lo-1
        
        left = bisect_left(nums, target)
        right = bisect_right(nums, target)
        return [-1 if left == len(nums) or nums[left] != target else left, \
                -1 if right == 0 or nums[right-1] != target else right-1]
# @lc code=end

