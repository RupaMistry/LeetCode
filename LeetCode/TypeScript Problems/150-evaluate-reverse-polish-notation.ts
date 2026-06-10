function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    // Define a set of valid operators for quick O(1) matching lookups
    const operators = new Set(['+', '-', '*', '/']);

    for (const token of tokens) {
        if (operators.has(token)) {
            // Pop the right-hand operand first (last one pushed)
            const b = stack.pop()!;
            // Pop the left-hand operand second (first one pushed)
            const a = stack.pop()!;

            let result = 0;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    // Math.trunc removes fractional digits, truncating strictly toward zero
                    result = Math.trunc(a / b);
                    break;
            }

            stack.push(result);
        } else {
            // It's a valid integer operand; convert it from string and store it
            stack.push(Number(token));
        }
    }

    // The final remaining value on the stack is our completed expression's answer
    return stack[0];
}