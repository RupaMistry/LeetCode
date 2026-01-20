function myAtoi(s: string): number {
    const MAX_INT = 2147483647; // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31

    let i = 0;
    let sign = 1;
    let result = 0;

    // 1. Skip leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Check for sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Process digits
    while (i < s.length) {
        const charCode = s.charCodeAt(i) - 48; // ASCII '0' is 48

        // If not a digit, stop
        if (charCode < 0 || charCode > 9) {
            break;
        }

        // 4. Handle rounding (clamping)
        // Check if adding this digit will exceed the 32-bit range
        if (result > Math.floor(MAX_INT / 10) ||
            (result === Math.floor(MAX_INT / 10) && charCode > 7)) {
            return sign === 1 ? MAX_INT : MIN_INT;
        }

        result = result * 10 + charCode;
        i++;
    }

    return result * sign;
}