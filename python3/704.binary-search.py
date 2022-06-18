#
# @lc app=leetcode id=704 lang=python3
#
# [704] Binary Search
#

# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            # you can not use `target < nums[mid]`
            if target > nums[mid]: left = mid + 1 
            else: right = mid
        return left if nums[left] == target else -1

