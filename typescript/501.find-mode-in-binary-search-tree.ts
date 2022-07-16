/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
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
function findMode(root: TreeNode | null): number[] {

    // a sliding window defined by `left` and the current node in the traversal.
    let left: TreeNode | null = null;
    let windowSize = 0;
    let maxWindowsSize = 0;
    let results: number[] = [];

    function inorder(node: TreeNode | null): void {
      if (!node) return;

      inorder(node.left);
      // expanding or resetting the window
      if (left && left.val === node.val) {
        windowSize += 1;
      } else {
        left = node;
        windowSize = 1;
      }

      if (windowSize > maxWindowsSize) {
        results = [];
        results.push(node.val);
        maxWindowsSize = windowSize;
      } else if (windowSize == maxWindowsSize) {
        results.push(node.val);
      }

      inorder(node.right);
    }

    inorder(root);
    return results;
};
// @lc code=end

