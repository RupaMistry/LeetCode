// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) return;

    // --- Step 1: Find the middle of the list ---
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // 'slow' is now at the middle. Cut the list into two halves.
    let secondHalfHead = slow!.next;
    slow!.next = null; // Disconnect the first half from the second half

    // --- Step 2: Reverse the second half ---
    let prev: ListNode | null = null;
    let current: ListNode | null = secondHalfHead;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;  // Flip the pointer
        prev = current;       // Move prev forward
        current = nextTemp;   // Move current forward
    }
    // 'prev' is now the new head of the reversed second half
    secondHalfHead = prev;

    // --- Step 3: Interweave the two halves ---
    let firstHalfHead: ListNode | null = head;

    while (secondHalfHead) {
        // Save the original next references before overwriting them
        let temp1 = firstHalfHead!.next;
        let temp2 = secondHalfHead.next;

        // Connect first half node to second half node
        firstHalfHead!.next = secondHalfHead;
        // Connect second half node to the saved next node of the first half
        secondHalfHead.next = temp1;

        // Shift our pointers forward for the next iteration
        firstHalfHead = temp1;
        secondHalfHead = temp2;
    }
}