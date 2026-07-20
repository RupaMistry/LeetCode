function isHappy(n: number): boolean {
    // Helper function to extract digits and sum their squares
    const getNext = (num: number): number => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let slow = n;
    let fast = getNext(n);

    // Continue until fast pointer hits 1 or the two pointers meet in a cycle
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}