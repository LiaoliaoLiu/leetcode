/*
 * @lc app=leetcode id=513 lang=typescript
 *
 * [513] Find Bottom Left Tree Value
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

function findBottomLeftValue(root: TreeNode | null): number {
    function helper(root: TreeNode, depth: number): [number, number] {
        if (!root.left && !root.right) return [root.val, depth];
        else if (!root.left) return helper(root.right!, depth+1);
        else if (!root.right) return helper(root.left!, depth+1);
        else {
            const [leftVal, leftDepth] = helper(root.left, depth+1);
            const [rightVal, rightDepth] = helper(root.right, depth+1);
            if (leftDepth === rightDepth) return [leftVal, leftDepth];
            else {
                return leftDepth > rightDepth ? [leftVal, leftDepth] : [rightVal, rightDepth];
            }
        }
    }
    return helper(root!, 0)[0];
};
// @lc code=end

