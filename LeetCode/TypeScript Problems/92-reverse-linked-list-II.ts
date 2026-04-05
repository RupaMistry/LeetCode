class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head;

    // Use a dummy to handle the edge case where 'left' is the first node
    const dummy = new ListNode(0, head);
    let prev = dummy;

    // 1. Move 'prev' to the node right before the sub-list starts
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next!;
    }

    // 'current' will be the first node of the sub-list to be reversed
    let current = prev.next; 

    // 2. Perform the reversal 'right - left' times
    for (let i = 0; i < right - left; i++) {
        const nextNode = current!.next;
        
        // Skip 'nextNode' in the chain
        current!.next = nextNode!.next;
        
        // Move 'nextNode' to the front of the sub-list (after 'prev')
        nextNode!.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
}