/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    const mat: number[][] = [];
    for (let i = 0; i < n; i+=1) {
        mat[i] = [];
    }

    let startX = 0, startY = 0, numberToFill = 1;
    let remainingCycles = Math.floor(n/2);
    let mid = Math.floor(n/2);
    let cycleOffset = 1;

    while (remainingCycles > 0) {
        let i = startX, j = startY;
        // 1  2 3 4
        // 12      5
        // 11      6
        // 10 9 8 7
        for (; i < startX + n - cycleOffset; i += 1) {
            mat[j][i] = numberToFill;
            numberToFill += 1;
        }
        // 1 2 3
        // _ _ 4
        // _ _ _
        for (; j < startY + n - cycleOffset; j += 1) {
            mat[j][i] = numberToFill;
            numberToFill += 1;
        }
        // _ 6 5
        for (; i > startX; i -= 1) {
            mat[j][i] = numberToFill;
            numberToFill += 1;
        }
        for (; j > startY; j -= 1) {
            mat[j][i] = numberToFill;
            numberToFill += 1;
        }

        startX += 1;
        startY += 1;
        cycleOffset += 2;
        remainingCycles -= 1;
    }

    if (n % 2 != 0) mat[mid][mid] = numberToFill;
    return mat;
};
// @lc code=end

