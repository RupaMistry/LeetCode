class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    // Create a dummy node to act as the starting point
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    // Ensure there are at least two nodes left to swap
    while (prev.next !== null && prev.next.next !== null) {
        // Identify the two nodes to swap
        let first = prev.next;
        let second = prev.next.next;

        // Perform the swap by rewiring pointers
        first.next = second.next; // Node 1 points to Node 3
        second.next = first;       // Node 2 points to Node 1
        prev.next = second;        // Previous part of list points to Node 2

        // Move the 'prev' pointer forward two steps for the next pair
        prev = first;
    }

    return dummy.next;
}