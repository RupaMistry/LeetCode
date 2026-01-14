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


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // A dummy head helps us easily return the start of the result list
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Continue as long as there are digits to process or a carry remains
    while (l1 !== null || l2 !== null || carry !== 0)
    {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        // Add the digit to our result list
        current.next = new ListNode(sum % 10);

        // Advance the pointers
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
}