/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let sentinel = new ListNode(42, head);
    let prev = sentinel;
    while (head != null) {
        if (head.val === val) prev.next = head.next;
        else prev = prev.next;
        head = head.next;
    }
    return sentinel.next;
};
// @lc code=end

