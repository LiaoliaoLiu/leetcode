/*
 * @lc app=leetcode id=232 lang=java
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
    private Stack<Integer> inStack;
    private Stack<Integer> outStack;

    public MyQueue() {
        this.inStack = new Stack<>();
        this.outStack = new Stack<>();
    }
    
    public void push(int x) {
        this.inStack.push(x);
    }
    
    private void transfer() {
        if (this.outStack.empty()) {
            while (!this.inStack.empty()) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }
    public int pop() {
        // 12p3pp
        // 
        // 
        this.transfer();
        return this.outStack.pop();
    }
    
    public int peek() {
        this.transfer();
        return this.outStack.peek();
    }
    
    public boolean empty() {
        return this.inStack.empty() && this.outStack.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
// @lc code=end

