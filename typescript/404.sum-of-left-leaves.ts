/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 */

import TreeNode from "./TreeNode";

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

function sumOfLeftLeaves(root: TreeNode | null): number {
    function isLeave(root: TreeNode | null) {
        return root && !root.left && !root.right;
    }

    if (!root) return 0;
    else if (isLeave(root.left)) return root.left!.val + sumOfLeftLeaves(root.right);
    else return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
// @lc code=end
