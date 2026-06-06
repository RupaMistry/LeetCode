class DLLNode {
    key: number;
    value: number;
    prev: DLLNode | null = null;
    next: DLLNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, DLLNode>;
    private head: DLLNode;
    private tail: DLLNode;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        // Establish stationary boundary sentinels
        this.head = new DLLNode(0, 0);
        this.tail = new DLLNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key)!;
        this.moveToHead(node); // It was just read, make it fresh!
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // Key exists: update its value and bump it to the front
            const node = this.map.get(key)!;
            node.value = value;
            this.moveToHead(node);
        } else {
            // Key is brand new: create it
            const newNode = new DLLNode(key, value);
            this.map.set(key, newNode);
            this.insertAtHead(newNode);

            // Check if we just burst past our maximum cache allowance
            if (this.map.size > this.capacity) {
                // The oldest element is always sitting right before our dummy tail
                const lruNode = this.tail.prev!;
                this.remove(lruNode);
                this.map.delete(lruNode.key); // Evict from index tracking
            }
        }
    }

    // Helper: Snip an existing node entirely out of its current spot
    private remove(node: DLLNode): void {
        const prevNode = node.prev!;
        const nextNode = node.next!;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // Helper: Splice a node directly into the front of the line (after dummy head)
    private insertAtHead(node: DLLNode): void {
        const firstRealNode = this.head.next!;

        this.head.next = node;
        node.prev = this.head;

        node.next = firstRealNode;
        firstRealNode.prev = node;
    }

    // Helper: Refresh a node's priority status by moving it to the front
    private moveToHead(node: DLLNode): void {
        this.remove(node);
        this.insertAtHead(node);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */