/*
 * @lc app=leetcode id=113 lang=typescript
 *
 * [113] Path Sum II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const results: number[][] = [];
    if (!root) return results;
    function helper(node: TreeNode, currSum: number, path: number[]): void {
        currSum += node.val;
        path.push(node.val);
        if (!node.left && !node.right) {
            if (currSum === targetSum) results.push([...path]);
        }
        if (node.left) helper(node.left, currSum, path);
        if (node.right) helper(node.right, currSum, path);
        path.pop();
    }


    helper(root, 0, []);
    return results;
};
// @lc code=end

