/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m-1, p2 = n-1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p1 < 0) {
            nums1[i] = nums2[p2];
            p2 -= 1;
        } else if (p2 < 0) {
            nums1[i] = nums1[p1];
            p1 -= 1;
        } else if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1 -= 1;
        } else {
            nums1[i] = nums2[p2];
            p2 -= 1;
        }
    }
};
// @lc code=end

