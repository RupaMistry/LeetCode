 class _Node {
     val: number
     next: _Node | null
      random: _Node | null
  
      constructor(val?: number, next?: _Node, random?: _Node) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
          this.random = (random===undefined ? null : random)
      }
  } 

function copyRandomList(head: _Node | null): _Node | null {

    if (!head) return null;

    let current: _Node | null = head;

    // --- Step 1: Create clones and weave them next to originals ---
    // Turns A -> B -> C into A -> A' -> B -> B' -> C -> C'
    while (current) {
        const nextNode = current.next;
        const copy = new _Node(current.val);

        current.next = copy;
        copy.next = nextNode;

        current = nextNode;
    }

    current = head;

    // --- Step 2: Set up the random pointers for the clones ---
    while (current) {
        const copy = current.next;
        if (current.random && copy) {
            // The copy's random target is the node directly after the original's random target
            copy.random = current.random.next;
        }
        // Jump forward two steps to the next original node
        current = copy ? copy.next : null;
    }

    // --- Step 3: Unweave the combined list ---
    current = head;
    const dummyHead = new _Node(0);
    let copyCurrent: _Node | null = dummyHead;

    while (current) {
        const nextOriginal = current.next ? current.next.next : null;
        const copy = current.next;

        // Extract the copy node into our new list
        if (copyCurrent && copy) {
            copyCurrent.next = copy;
            copyCurrent = copy;
        }

        // Restore the original list structure
        current.next = nextOriginal;
        current = nextOriginal;
    }

    return dummyHead.next;
}