/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let fast = 0, slow = 0;
    while (fast < nums.length) {
        // [1,1,1,2,2,3] 2
        //  f         f
        //  s     s
        if (nums[fast] === val) {
            fast += 1;
            continue;
        }
        nums[slow] = nums[fast];
        fast += 1;
        slow += 1;
    }

    return slow;
};
// @lc code=end

