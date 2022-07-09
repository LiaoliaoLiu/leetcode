/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
function getEncounterNode(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) return slow;
    }

    return null;
}
function detectCycle(head: ListNode | null): ListNode | null {
    let nodeInCycle = getEncounterNode(head);
    if (nodeInCycle == null) return null;

    let nodeInPath = head;
    while (nodeInCycle !== nodeInPath) {
        nodeInCycle = nodeInCycle.next;
        nodeInPath = nodeInPath.next;
    }
    
    return nodeInPath;
};
// @lc code=end

