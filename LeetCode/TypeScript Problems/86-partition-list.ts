class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    // Dummy nodes to start the two separate lists
    const beforeHead = new ListNode(0);
    const afterHead = new ListNode(0);

    // Pointers to the current last element of the two lists
    let before = beforeHead;
    let after = afterHead;

    while (head !== null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    // Terminate the 'after' list to avoid a cycle in the linked list
    after.next = null;

    // Link the end of 'before' list to the head of 'after' list
    before.next = afterHead.next;

    return beforeHead.next;
}