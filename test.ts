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
        r += 1;
    }

    while (r < nums.length) {
        results.push(possibleMaxQueue[0]);
        let popped = nums[l];
        l += 1;
        if (popped === possibleMaxQueue[0]) possibleMaxQueue.shift();
        enqueue(possibleMaxQueue, nums[r]);
        r += 1;
    }

    return results;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
