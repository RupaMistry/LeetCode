// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let hasCycle = false;

    // Phase 1: Run the race to see if a cycle exists
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }

    // If no cycle was found, we can't find a loop entrance
    if (!hasCycle) return null;

    // Phase 2: Reset one pointer to the head and move both at a speed of 1
    fast = head; 
    
    while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
    }

    // Both pointers now point to the node where the cycle begins
    return slow;
}