class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 1. Create a dummy node to handle edge cases (like removing the head)
    const dummy = new ListNode(0, head);
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // 2. Move fast pointer so there is a gap of n nodes between slow and fast
    // We move it n + 1 times so slow ends up at the node BEFORE the target
    for (let i = 0; i <= n; i++) {
        fast = fast?.next || null;
    }

    // 3. Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow!.next;
    }

    // 4. Skip the nth node
    if (slow && slow.next) {
        slow.next = slow.next.next;
    }

    return dummy.next;
}