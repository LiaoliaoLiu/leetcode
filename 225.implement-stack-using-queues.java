/*
 * @lc app=leetcode id=225 lang=java
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
    private Queue<Integer> queue;
    private boolean isStackified;

    public MyStack() {
        this.queue = new LinkedList<>();
    }
    
    private void stackify() {
        for (int i = 0; i < this.queue.size()-1; i++) {
            this.queue.add(this.queue.poll());
        }
    }
    public void push(int x) {
        this.queue.add(x);
        this.stackify();
    }
    
    public int pop() {
        return this.queue.poll();
    }
    
    public int top() {
        return this.queue.peek();
    }
    
    public boolean empty() {
        return this.queue.peek() == null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
// @lc code=end

