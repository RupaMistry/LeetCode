class MaxHeap {
    private data: number[] = [];

    push(val: number): void {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    pop(): number | undefined {
        if (this.data.length === 0) return undefined;
        const top = this.data[0];
        const bottom = this.data.pop()!;
        if (this.data.length > 0) {
            this.data[0] = bottom;
            this.bubbleDown(0);
        }
        return top;
    }

    peek(): number {
        return this.data.length > 0 ? this.data[0] : 0;
    }

    private bubbleUp(idx: number): void {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.data[idx] <= this.data[parentIdx]) break;
            [this.data[idx], this.data[parentIdx]] = [this.data[parentIdx], this.data[idx]];
            idx = parentIdx;
        }
    }

    private bubbleDown(idx: number): void {
        const length = this.data.length;
        while (true) {
            let largest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;

            if (left < length && this.data[left] > this.data[largest]) largest = left;
            if (right < length && this.data[right] > this.data[largest]) largest = right;

            if (largest === idx) break;
            [this.data[idx], this.data[largest]] = [this.data[largest], this.data[idx]];
            idx = largest;
        }
    }
}

function getSkyline(buildings: number[][]): number[][] {
    interface EventPoint {
        x: number;
        h: number; // negative for start, positive for end
    }

    const events: EventPoint[] = [];

    // 1. Convert buildings into sweep-line events
    for (const [left, right, height] of buildings) {
        events.push({ x: left, h: -height }); // Start edge
        events.push({ x: right, h: height });  // End edge
    }

    // 2. Sort events by x coordinate, breaking ties using height
    events.sort((a, b) => {
        if (a.x !== b.x) return a.x - b.x;
        return a.h - b.h;
    });

    const maxHeap = new MaxHeap();
    maxHeap.push(0); // Ground level (height 0)

    const delayedRemovals = new Map<number, number>();
    const result: number[][] = [];
    let prevMaxHeight = 0;

    // 3. Process events sequentially
    for (const event of events) {
        if (event.h < 0) {
            // Building starts -> add height
            maxHeap.push(-event.h);
        } else {
            // Building ends -> mark height for lazy deletion
            delayedRemovals.set(event.h, (delayedRemovals.get(event.h) || 0) + 1);
        }

        // Lazy cleanup: prune out stale heights from the top of the heap
        while (delayedRemovals.get(maxHeap.peek())) {
            const top = maxHeap.peek();
            delayedRemovals.set(top, delayedRemovals.get(top)! - 1);
            maxHeap.pop();
        }

        const currentMaxHeight = maxHeap.peek();

        // If the max visible height changed, record a key point
        if (currentMaxHeight !== prevMaxHeight) {
            result.push([event.x, currentMaxHeight]);
            prevMaxHeight = currentMaxHeight;
        }
    }

    return result;
}