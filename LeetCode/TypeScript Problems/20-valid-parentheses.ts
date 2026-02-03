function isValid(s: string): boolean {
    // A map to store the matching pairs for easy lookup
    const bracketMap: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Initialize an empty stack
    const stack: string[] = [];

    for (const char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element (or use a dummy value if stack is empty)
            const topElement = stack.length > 0 ? stack.pop() : '#';

            // If the popped element doesn't match the required opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}