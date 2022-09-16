import java.util.*;

import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode id=102 lang=java
 *
 * [102] Binary Tree Level Order Traversal
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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> nodes = new ArrayDeque<>();
        nodes.add(root);
        while (!nodes.isEmpty()) {
            int levelSize = nodes.size();
            List<Integer> nodesInThisLevel = new ArrayList<>();
            for (int i = 0; i < levelSize; i++) {
                TreeNode curr = nodes.poll();
                nodesInThisLevel.add(curr.val);
                if(curr.left != null) nodes.add(curr.left);
                if(curr.right != null) nodes.add(curr.right);
            }
            result.add(nodesInThisLevel);
        }

        return result;
    }
}
// @lc code=end

