/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    function enqueue(q: number[], n: number) {
        while (q.length > 0 && n > q[q.length-1]) {
            q.pop();
        }
        q.push(n);
    }
    let l = 0, r = 0;
    let possibleMaxQueue: number[] = [];
    let results: number[] = [];

    for (; r < k; r += 1) { // [)
        enqueue(possibleMaxQueue, nums[r]);
    }
    results.push(possibleMaxQueue[0]);

    for (;r < nums.length; r += 1) {
        let popped = nums[l];
        l += 1;
        if (popped === possibleMaxQueue[0]) possibleMaxQueue.shift();
        enqueue(possibleMaxQueue, nums[r]);
        results.push(possibleMaxQueue[0]);
    }

    return results;
};
// @lc code=end

