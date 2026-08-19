class MyQueue {
    private inStack: number[];
    private outStack: number[];

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    /** Push element x to the back of queue. */
    push(x: number): void {
        this.inStack.push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    pop(): number {
        this.shiftStacks();
        return this.outStack.pop()!;
    }

    /** Get the front element. */
    peek(): number {
        this.shiftStacks();
        return this.outStack[this.outStack.length - 1];
    }

    /** Returns whether the queue is empty. */
    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    /** Helper to move elements from inStack to outStack when needed */
    private shiftStacks(): void {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()!);
            }
        }
    }
}