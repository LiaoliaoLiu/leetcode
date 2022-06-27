/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    function getOperands(stack: string[]): number[] {
        function getOperand(n: string | undefined): number {
            return n == undefined ? 0 : Number.parseInt(n);
        }
        let operand2 = getOperand(stack.pop());
        let operand1 = getOperand(stack.pop());
        return [operand1, operand2];
    }
    function calculate(stack: string[], operator: string): void {
        let [operand1, operand2] = getOperands(stack);
        if (operator === '+') {
            stack.push((operand1 + operand2).toString());
        } else if (operator === '-') {
            stack.push((operand1 - operand2).toString());
        } else if (operator === '/') {
            let result = operand1 / operand2;
            result = result >= 0 ? Math.floor(result) : Math.ceil(result);
            stack.push(result.toString());
        } else if (operator === '*') {
            stack.push((operand1 * operand2).toString());
        }
    }
    let stack: string[] = [];
    for (let i = 0; i < tokens.length; i += 1) {
        let curr = tokens[i];
        if (isNaN(+curr)) {
            calculate(stack, curr);
        } else {
            stack.push(curr);
        }
    }

    return Number.parseInt(stack[0]);
};
// @lc code=end

