class MinStack {
    // A single array tracking both the value and the historical minimum at that snapshot
    private stack: StackNode[];

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        // If the stack is empty, this first value is naturally the minimum.
        // Otherwise, compare this value with the minimum of the element right below it.
        const currentMin = this.stack.length === 0 
            ? value 
            : Math.min(value, this.getMin());

        this.stack.push({
            val: value,
            min: currentMin
        });
    }

    pop(): void {
        // Standard O(1) array pop. The element and its local min context are discarded together.
        this.stack.pop();
    }

    top(): number {
        // Look at the top element without removing it
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
       // The top element always holds the correct minimum for the current stack height
        return this.stack[this.stack.length - 1].min; 
    }
}

interface StackNode {
    val: number;
    min: number;
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */