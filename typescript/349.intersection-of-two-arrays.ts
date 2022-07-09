/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const retSet = new Set<number>();
    const nums1Set = new Set(nums1);

    nums2.forEach(n => {
        if (nums1Set.has(n)) retSet.add(n);
    });

    return Array.from(retSet);
};
// @lc code=end

