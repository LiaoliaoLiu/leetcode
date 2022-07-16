/*
 * @lc app=leetcode id=889 lang=typescript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    let preIndex = 0, postIndex = 0;
    function helper(): TreeNode {
        const root = new TreeNode(preorder[preIndex]);
        preIndex += 1;
        if (root.val !== postorder[postIndex]) root.left = helper();
        if (root.val !== postorder[postIndex]) root.right = helper();
        postIndex += 1;
        return root;
    }
    return helper();
};
// @lc code=end

