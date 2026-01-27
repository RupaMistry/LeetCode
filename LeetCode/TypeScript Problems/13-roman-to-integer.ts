function romanToInt(s: string): number {
    const romanMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next value, 
        // it's a subtractive case (like IV or IX)
        if (nextVal !== undefined && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, just add the value
            total += currentVal;
        }
    }

    return total;
}