/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    // for accessing elements in the inorder array ranging from [leftBound, rightBound]
    function helper(leftBound:number, rightBound: number): TreeNode | null {
        if (leftBound > rightBound) return null;

        let val = postorder.pop();
        if (val === null) return null;
        let root = new TreeNode(val, null, null);
        let rootIndex = inorder.indexOf(val);
        root.right = helper(rootIndex + 1, rightBound);
        root.left = helper(leftBound, rootIndex - 1);
        return root;
    }

    return helper(0, inorder.length-1);
};
// @lc code=end
