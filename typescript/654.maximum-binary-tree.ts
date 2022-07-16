/*
 * @lc app=leetcode id=654 lang=typescript
 *
 * [654] Maximum Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    function maxAndIndex(start: number, end: number): [number, number] {
        let max = nums[start], index = start;
        start += 1;
        while (start <= end) {
            let curr = nums[start];
            if (curr > max) {
                max = curr;
                index = start;
            }
            start += 1;
        }

        return [max, index];
    }

    function helper(leftBound: number, rightBound: number): TreeNode | null {
        if (leftBound > rightBound) return null;

        const [val, index] = maxAndIndex(leftBound, rightBound);
        const root = new TreeNode(val);
        root.left = helper(leftBound, index - 1);
        root.right = helper(index + 1, rightBound);
        return root;
    }

    return helper(0, nums.length-1);
};
// @lc code=end

