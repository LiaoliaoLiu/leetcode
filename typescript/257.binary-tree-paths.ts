/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
 */

import path from "path";
import TreeNode from "./TreeNode";

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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = []; 
    function helper(node: TreeNode, path: string): void {
        if (!node.left && !node.right) {
            result.push(path + node.val);
        }

        if(node.left) helper(node.left, path + node.val + '->');
        if(node.right) helper(node.right, path + node.val + '->');
    }

    if (!root) return result;
    helper(root, '');
    return result;
};
// @lc code=end

