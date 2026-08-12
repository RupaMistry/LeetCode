class MyStack {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    /** Push element x onto stack. */
    push(x: number): void {
        this.queue.push(x); // Standard queue: enqueue to back
        const rotations = this.queue.length - 1;

        // Rotate all previous elements behind the newly inserted element
        for (let i = 0; i < rotations; i++) {
            const front = this.queue.shift()!; // Standard queue: dequeue from front
            this.queue.push(front);             // Standard queue: enqueue to back
        }
    }

    /** Removes the element on top of the stack and returns that element. */
    pop(): number {
        return this.queue.shift()!; // Standard queue: dequeue from front
    }

    /** Get the top element. */
    top(): number {
        return this.queue[0]; // Standard queue: peek front
    }

    /** Returns whether the stack is empty. */
    empty(): boolean {
        return this.queue.length === 0;
    }
}