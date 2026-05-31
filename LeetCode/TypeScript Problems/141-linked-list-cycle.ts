// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function hasCycle(head: ListNode | null): boolean {
    // If the list is empty or has only one node with no cycle, it's impossible to loop
    if (!head || !head.next) return false;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Run the race as long as the fast runner has ground to move forward
    while (fast && fast.next) {
        slow = slow!.next;          // Moves 1 step
        fast = fast.next.next;     // Moves 2 steps

        // If they meet up, we found a loop!
        if (slow === fast) {
            return true;
        }
    }

    // If the fast runner broke out of the loop by hitting an end, there's no cycle
    return false;
}