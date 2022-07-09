/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function isBalanced(root: TreeNode | null): boolean {
    function helper(node: TreeNode | null): [boolean, number] {
        if (!node) return [true, -1];

        let [leftBalanced, leftHeight] = helper(node.left);
        if (!leftBalanced) return [false, -42];

        let [rightBalanced, rightHeight] = helper(node.right);
        if (!rightBalanced) return [false, -42];

        return [Math.abs(leftHeight - rightHeight) <= 1, Math.max(leftHeight, rightHeight) + 1];
    }

    return helper(root)[0];
};
// @lc code=end

