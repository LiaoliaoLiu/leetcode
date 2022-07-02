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

    let startRow = 0, startCol = 0, endRow = n - 1, endCol = n - 1;
    let numberToFill = 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i += 1) {
            mat[startRow][i] = numberToFill;
            numberToFill += 1;
        }
        startRow += 1;
        for (let i = startRow; i <= endRow; i += 1) {
            mat[i][endCol] = numberToFill;
            numberToFill += 1;
        }
        endCol -= 1;
        if (startRow <= endRow && startCol <= endCol) {
            for (let i = endCol; i >= startCol; i -= 1) {
                mat[endRow][i] = numberToFill;
                numberToFill += 1;
            }
            endRow -= 1;
            for (let i = endRow; i >= startRow; i -= 1) {
                mat[i][startCol] = numberToFill;
                numberToFill += 1;
            }
            startCol += 1;
        }
    }
    return mat;
};
// @lc code=end

