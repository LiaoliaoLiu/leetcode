/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
    //    1
    //  2   2
    //3  4 4  3
    function helper(left: TreeNode | null, right: TreeNode | null) {
        if (!left && !right) return true;
        else if (!left || !right) return false;
        else {
            return left.val === right.val &&
                helper(left.left, right.right) &&
                helper(left.right, right.left);
        }
    }

    return helper(root, root);
};
// @lc code=end

