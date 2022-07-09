/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    const sentinel = new ListNode(42, head);
    // p [1 2 3]
    let prev = sentinel;
    // [1]
    while (prev.next && prev.next.next) {
        let firstNode = prev.next;
        let secondNode = prev.next.next;
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        prev = prev.next.next;
    }

    return sentinel.next;
};
// @lc code=end

