// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function sortList(head: ListNode | null): ListNode | null {
    // Base Case: If the list is empty or has only one node, it's already sorted
    if (!head || !head.next) return head;

    // --- Step 1: Split the list in half ---
    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Disconnect the first half from the second half
    if (prev) prev.next = null;

    // --- Step 2: Recursively sort each half ---
    const leftSorted = sortList(head);
    const rightSorted = sortList(slow);

    // --- Step 3: Merge the sorted halves back together ---
    return merge(leftSorted, rightSorted);
}

// Helper function to merge two sorted linked lists
function merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes from either list
    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    return dummy.next;
}