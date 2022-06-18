/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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
// function getLength(head: ListNode | null): number {
//     if (head == null) return 0;
//     else return getLength(head.next) + 1;
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const sentinel = new ListNode(42, head);
    let prev = sentinel;
    let fast = sentinel;
    // s [1 2 3] 2
    //    p    f
    for (let i = 0; i < n + 1; i += 1) {
        fast = fast.next;
    }

    while (fast) {
        prev = prev.next;
        fast = fast.next;
    }
    // const length = getLength(head);
    // for (let i = 0; i < length - n - 1; i += 1) {
    //     prev = prev.next;
    // }
    // // [1 2 3] 2
    prev.next = prev.next.next;

    return sentinel.next;
};
// @lc code=end

