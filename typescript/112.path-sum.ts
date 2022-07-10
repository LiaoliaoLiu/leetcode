/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    function helper(root: TreeNode, currSum: number): boolean {
        currSum = root.val + currSum;
        if (!root.left && !root.right) return currSum === targetSum;
        else if (!root.left) return helper(root.right, currSum);
        else if (!root.right) return helper(root.left, currSum);
        else return helper(root.right, currSum) || helper(root.left, currSum);
    }

    return helper(root, 0);
};
// @lc code=end

