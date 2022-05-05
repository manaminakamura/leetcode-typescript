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

 function hasCycle(head: ListNode | null): boolean {
    let slowCursor = head;
    let fastCursor = head;
    while(slowCursor && fastCursor) {
        if(!slowCursor.next || !fastCursor.next) {
            return false;
        }
        slowCursor = slowCursor.next;
        fastCursor = fastCursor.next.next;
        if(slowCursor === fastCursor) {
            return true;
        }
    }
    return false;
};
