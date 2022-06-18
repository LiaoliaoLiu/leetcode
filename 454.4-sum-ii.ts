/*
 * @lc app=leetcode id=454 lang=typescript
 *
 * [454] 4Sum II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const l = nums1.length;

    // divide the four arrays into 2 groups
    // for nums1 and nums2
    const partialSumFrequency = new Map<number, number>();
    for (let i = 0; i < l; i += 1) {
        for (let j = 0; j < l; j += 1) {
            let partialSum = nums1[i] + nums2[j];
            if (!partialSumFrequency.has(partialSum)) {
                partialSumFrequency.set(partialSum, 1);
            } else {
                // increase its frequency by 1
                partialSumFrequency.set(partialSum, 1 + partialSumFrequency.get(partialSum));
            }
        }
    }

    // [1 2], [3 4]  | [-1 -2] [-3 -4]
    // 1+4, 2+3      | -1-4

    let numberOfTuples = 0;
    for (let i = 0; i < l; i += 1) {
        for (let j = 0; j < l; j += 1) {
            let partialSum = nums3[i] + nums4[j];
            let complement = -partialSum;
            if (partialSumFrequency.has(complement)) {
                numberOfTuples += partialSumFrequency.get(complement);
            }
        }
    }

    return numberOfTuples;
};
// @lc code=end

