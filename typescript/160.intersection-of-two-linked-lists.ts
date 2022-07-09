/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const listASet = new Set<ListNode>();
    while (headA) {
        listASet.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (listASet.has(headB)) return headB;
        headB = headB.next;
    }

    return null;
};
// @lc code=end

