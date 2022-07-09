/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
    mat: number[][];
    constructor(matrix: number[][]) {
        this.mat = matrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;
        for (let i = row1; i <= row2; i += 1) {
            for (let j = col1; j <= col2; j+= 1) {
                sum += this.mat[i][j];
            }
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

