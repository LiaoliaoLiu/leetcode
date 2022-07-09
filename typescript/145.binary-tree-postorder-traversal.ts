/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const stack: TreeNode[] = [];
    const seen = new Set<TreeNode>();
    const results: number[] = [];
    stack.push(root);
    while (stack.length !== 0) {
        let node = stack.pop()!;
        if (seen.has(node)) {
            results.push(node.val);
        } else {
            seen.add(node);
            stack.push(node);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return results;
};
// @lc code=end

