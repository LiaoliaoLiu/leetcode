/*
 * @lc app=leetcode id=904 lang=typescript
 *
 * [904] Fruit Into Baskets
 */
// @lc code=start
function totalFruit(fruits: number[]): number {
    let left = 0;
    let nextLeft = 0;
    let maxSum = 0;
    let collectedType = new Set<number>();
    for (let right = 0; right < fruits.length; right+=1) {
        if (!collectedType.has(fruits[right])) {
            if (collectedType.size == 2) {
                // 1 0 1 1 2
                //         ^
                left = nextLeft;
                collectedType = new Set<number>();
                collectedType.add(fruits[left]);
            }
            collectedType.add(fruits[right]);
        }
        let currentSum = right - left + 1;
        maxSum = currentSum > maxSum ? currentSum : maxSum;
        if (fruits[right] != fruits[nextLeft]) nextLeft = right;
    }

    return maxSum;
};
// @lc code=end

