/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const next: (TreeNode | null)[] = [];
    const results: number[][] = [];
    next.push(root);
    while (next.length !== 0) {
        let levelSize = next.length;
        let levelValues: number[] = [];
        for (let i = 0; i < levelSize; i += 1) {
            let node = next.shift();
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
            levelValues.push(node.val);
        }
        results.push(levelValues);
    }
    return results;
};
// @lc code=end

