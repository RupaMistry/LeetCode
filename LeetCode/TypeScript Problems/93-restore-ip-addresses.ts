function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];

    // If the string is too short or too long, it's impossible
    if (s.length < 4 || s.length > 12) return [];

    const backtrack = (start: number, path: string[]) => {
        // Base Case: We've found 4 segments
        if (path.length === 4) {
            // If we also used up the entire string, we have a winner
            if (start === s.length) {
                result.push(path.join('.'));
            }
            return;
        }

        // Try taking 1, 2, or 3 characters for the next segment
        for (let len = 1; len <= 3; len++) {
            // Don't go past the end of the string
            if (start + len > s.length) break;

            const segment = s.substring(start, start + len);

            // Validation Checks:
            // 1. No leading zeros (unless the segment is just "0")
            if (segment.length > 1 && segment[0] === '0') continue;

            // 2. Value must be <= 255
            if (parseInt(segment) > 255) continue;

            // If valid, move to the next segment
            path.push(segment);
            backtrack(start + len, path);
            path.pop(); // Backtrack to try a different length
        }
    };

    backtrack(0, []);
    return result;
}