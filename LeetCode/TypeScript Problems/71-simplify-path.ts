function simplifyPath(path: string): string {
    const stack: string[] = [];
    // Split by '/' to handle multiple slashes and isolate components
    const parts = path.split('/');

    for (const part of parts) {
        if (part === '..') {
            // Move up one directory: pop from stack if possible
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (part === '.' || part === '') {
            // Ignore current directory indicators and empty strings from '//'
            continue;
        } else {
            // Valid directory or file name (including '...')
            stack.push(part);
        }
    }

    // Join with '/' and ensure leading slash
    return '/' + stack.join('/');
}