function calculate(s: string): number {
    const stack: number[] = [];
    let result = 0;
    let num = 0;
    let sign = 1; // 1 represents '+', -1 represents '-'

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            // Build multi-digit numbers
            num = num * 10 + (char.charCodeAt(0) - 48);
        } else if (char === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            // Save outer context onto the stack
            stack.push(result);
            stack.push(sign);

            // Reset context for the inner expression
            result = 0;
            sign = 1;
        } else if (char === ')') {
            // Complete inner expression evaluation
            result += sign * num;
            num = 0;

            // Retrieve previous sign and result from outer context
            const prevSign = stack.pop()!;
            const prevResult = stack.pop()!;

            // Combine outer and inner results
            result = prevResult + prevSign * result;
        }
        // Whitespaces are naturally ignored
    }

    // Add the trailing number if exists
    result += sign * num;

    return result;
}