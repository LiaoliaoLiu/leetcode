/*
 * @lc app=leetcode id=559 lang=typescript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    if (!root) return 0;
    else {
        let max = 0;
        for (let child of root.children) {
            let possibleMax = maxDepth(child);
            if (max < possibleMax) max = possibleMax;
        }
        return max + 1;
    }
};
// @lc code=end

