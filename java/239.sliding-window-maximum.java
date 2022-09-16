import java.util.*;
/*
 * @lc app=leetcode id=239 lang=java
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
class Solution {
    private void enqueue(Deque<Integer> q, int n) {
        while (!q.isEmpty() && q.peekLast() < n ) {
            q.removeLast();
        }
        q.addLast(n);
    }

    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> possibleMax = new ArrayDeque<>();
        int[] results = new int[nums.length - k + 1];

        // initialize the sliding window, [Left, right)
        int left = 0;
        int right = 0;
        while (right < k) {
            enqueue(possibleMax, nums[right]);
            right += 1;
        }
        results[left] = possibleMax.peekFirst();
        // slide the window
        while (right < nums.length) {
            int popped = nums[left];
            if (popped == possibleMax.peekFirst()) {
                possibleMax.removeFirst();
            }
            left += 1;
            enqueue(possibleMax, nums[right]);
            results[left] = possibleMax.peekFirst();
            right += 1;
        }

        return results;
    }
}
// @lc code=end

