/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
 */

import { diffieHellman } from "crypto";

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

function getMinimumDifference(root: TreeNode | null): number {
    let prev: TreeNode | null = null;
    let minDiff = Number.MAX_SAFE_INTEGER;
    function traversal(curr: TreeNode | null){
        if (!curr) return;

        traversal(curr.left);
        if (prev) {
            minDiff = Math.min(minDiff, curr.val - prev.val);
        }
        prev = curr
        traversal(curr.right);
    }

    traversal(root);
    return minDiff;
};
// @lc code=end

