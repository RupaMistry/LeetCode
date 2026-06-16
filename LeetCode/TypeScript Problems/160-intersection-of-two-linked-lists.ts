// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    // The loop terminates when they either meet at the intersecting node,
    // or both hit 'null' at the end of the second pass (meaning no intersection exists).
    while (pointerA !== pointerB) {
        // Switch to the opposite list's head upon reaching the end
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    // Returning pointerA works for both cases: it will be the common node or null
    return pointerA;
}