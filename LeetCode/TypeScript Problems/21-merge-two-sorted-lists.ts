class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Create a dummy node to hold the start of the list
    const dummy = new ListNode(-1);
    let tail = dummy;

    // While both lists have elements
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // Attach the remaining nodes of whichever list is not empty
    tail.next = list1 !== null ? list1 : list2;

    // The actual head is the node after our dummy
    return dummy.next;
}