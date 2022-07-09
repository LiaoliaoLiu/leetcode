/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function countNodes(root: TreeNode | null): number {
    function getHeight(root: TreeNode | null): number {
        if (!root) return -1;
        else return getHeight(root.left) + 1;
    }

    function access(root: (TreeNode | null), index: number): TreeNode | null {
        // leftChild(k) = 2k
        // rightChild(k) = 2k + 1
        // parent(k) = k / 2
        const order: number[] = []; 
        // stores the steps to the indexed node in reversed order
        let k = index;
        while (k != 1) {
            order.push(k % 2);
            k = Math.floor(k / 2);
        }
        while (order.length !== 0) {
            let direction = order.pop();
            if (direction === 1) root = root.right;
            else root = root.left;
        }
        return root;
    }

    function exist(root: (TreeNode | null), index: number, height): boolean {
        let left = 0, right = 2**height;
        for (let i = 0; i < height; i += 1) {
            let mid = left + Math.floor((right - left) / 2);
            if (index < mid) {
                root = root.left;
                right = mid;
            } else {
                root = root.right;
                left = mid + 1;
            }
        }
        return root != null;
    }

    if (!root) return 0;
    const h = getHeight(root);
    if (h === 0) return 1;
    let left = 0, right = 2**h;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (exist(root, mid, h)) left = mid + 1;
        else right = mid;
    }
    // 1 2 3 [_ _)
    return 2 ** h - 1 + left;
};
// @lc code=end

