// Definition for singly-linked list node.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // 1. Find middle of the list (slow will be at the mid-point)
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // 3. Compare the first half and reversed second half
    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev; // Head of reversed second half
    let isPalin = true;

    while (secondHalf) {
        if (firstHalf!.val !== secondHalf.val) {
            isPalin = false;
            break;
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }

    // 4. (Optional) Restore the original list structure
    curr = prev;
    prev = null;
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return isPalin;
}