function isNumber(s: string): boolean {
    s = s.trim(); // Just in case there's surrounding whitespace

    let seenDigit = false;
    let seenDot = false;
    let seenExponent = false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            seenDigit = true;
        }
        else if (char === '+' || char === '-') {
            // A sign is only valid at index 0 or immediately after 'e'/'E'
            if (i > 0 && s[i - 1].toLowerCase() !== 'e') {
                return false;
            }
        }
        else if (char.toLowerCase() === 'e') {
            // Exponent is valid only if we haven't seen one yet AND we already saw a digit
            if (seenExponent || !seenDigit) {
                return false;
            }
            seenExponent = true;
            // We must see new digits after the 'e'
            seenDigit = false;
        }
        else if (char === '.') {
            // A dot is valid only if we haven't seen a dot OR an exponent yet
            if (seenDot || seenExponent) {
                return false;
            }
            seenDot = true;
        }
        else {
            // Any other character (like 'a' or whitespace) is an instant fail
            return false;
        }
    }

    // Must have seen at least one digit to be valid
    return seenDigit;
}