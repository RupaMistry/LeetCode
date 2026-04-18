function longestValidParentheses(s: string): number {
    let maxLen = 0;
    // The stack stores indices. 
    // We start with -1 to handle the base case for substrings starting at index 0.
    const stack: number[] = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Push the index of the opening bracket
            stack.push(i);
        } else {
            // It's a ')', so pop the last matching '(' or the boundary
            stack.pop();

            if (stack.length === 0) {
                // If empty, this ')' was an extra one. 
                // We push its index to serve as the new starting boundary.
                stack.push(i);
            } else {
                // If not empty, we have a valid balanced substring!
                // The length is (current index) - (index of previous element in stack)
                const currentLen = i - stack[stack.length - 1];
                maxLen = Math.max(maxLen, currentLen);
            }
        }
    }

    return maxLen;
}