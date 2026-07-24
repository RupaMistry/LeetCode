// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const nextTemp: ListNode | null = current.next; // 1. Save next node
        current.next = prev;                            // 2. Reverse link
        prev = current;                                 // 3. Move prev forward
        current = nextTemp;                             // 4. Move current forward
    }

    return prev;
}