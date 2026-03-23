class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    let count = 0;

    // 1. Check if there are k nodes to reverse
    while (curr !== null && count < k) {
        curr = curr.next;
        count++;
    }

    // If we have k nodes, reverse them
    if (count === k) {
        // 2. Standard reversal of k nodes
        let prev: ListNode | null = null;
        let next: ListNode | null = null;
        let tempCurr = head;

        for (let i = 0; i < k; i++) {
            next = tempCurr!.next;
            tempCurr!.next = prev;
            prev = tempCurr;
            tempCurr = next;
        }

        // 3. Recursive call for the rest of the list
        // 'head' is now the tail of the reversed segment
        if (next !== null) {
            head!.next = reverseKGroup(next, k);
        }

        // 4. 'prev' is the new head of this reversed segment
        return prev;
    }

    // If fewer than k nodes left, return head as is
    return head;
}