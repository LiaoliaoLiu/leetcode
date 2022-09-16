import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.Queue;

import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode id=103 lang=java
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> nodes = new ArrayDeque<>();
        nodes.add(root);
        boolean zig = true;
        while (!nodes.isEmpty()) {
            int levelSize = nodes.size();
            Deque<TreeNode> nodesInLevel = new ArrayDeque<>();
            for (int i = 0; i < levelSize; i++) {
                TreeNode curr = nodes.poll();
                nodesInLevel.add(curr);
                if (curr.left != null) nodes.add(curr.left);
                if (curr.right != null) nodes.add(curr.right);
            }
            
            List<Integer> zigzagNodes = new ArrayList<>();
            if (zig) {
                while (!nodesInLevel.isEmpty())
                    zigzagNodes.add(nodesInLevel.pollFirst().val);
            } else {
                while (!nodesInLevel.isEmpty())
                    zigzagNodes.add(nodesInLevel.pollLast().val);
            }
            zig = !zig;

            result.add(zigzagNodes);
        }

        return result;
    }
}
// @lc code=end

