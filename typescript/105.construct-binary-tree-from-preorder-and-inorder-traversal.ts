/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function helper(inLeftBound: number, inRightBound: number): TreeNode | null {
        if (inLeftBound > inRightBound) return null;

        const val = preorder.shift();
        if (val === undefined) return null;
        const root = new TreeNode(val);
        const inIndex = inorder.indexOf(val);
        root.left = helper(inLeftBound, inIndex - 1);
        root.right = helper(inIndex + 1, inRightBound);
        return root;
    }

    return helper(0, inorder.length-1);
};
// @lc code=end

