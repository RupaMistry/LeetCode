function calculate(s: string): number {
    const stack: number[] = [];
    let currentNum = 0;
    let lastOp = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 1. Build multi-digit numbers
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + (char.charCodeAt(0) - 48);
        }

        // 2. If it's an operator or the last character, process previous operation
        if ((char !== ' ' && (char < '0' || char > '9')) || i === s.length - 1) {
            if (lastOp === '+') {
                stack.push(currentNum);
            } else if (lastOp === '-') {
                stack.push(-currentNum);
            } else if (lastOp === '*') {
                const prev = stack.pop()!;
                stack.push(prev * currentNum);
            } else if (lastOp === '/') {
                const prev = stack.pop()!;
                // Math.trunc truncates toward zero correctly for both positive and negative numbers
                stack.push(Math.trunc(prev / currentNum));
            }

            lastOp = char;
            currentNum = 0;
        }
    }

    // Sum up all delayed additions/subtractions in the stack
    return stack.reduce((sum, val) => sum + val, 0);
}