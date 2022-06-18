/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    const ret: number[] = [];
    let startCol = 0, startRow = 0, endCol = matrix[0].length - 1, endRow = matrix.length - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            ret.push(matrix[startRow][i]);
        }
        startRow += 1;
        for (let i = startRow; i <= endRow; i++) {
            ret.push(matrix[i][endCol]);
        }
        endCol -= 1;
        if (startCol <= endCol && startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                ret.push(matrix[endRow][i]);
            }
            endRow -= 1;
        }
        if (startCol <= endCol && startRow <= endRow) {
            for (let i = endRow; i >= startRow; i--) {
                ret.push(matrix[i][startCol]);
            }
            startCol += 1;
        }
    }

    return ret;
};
// @lc code=end
