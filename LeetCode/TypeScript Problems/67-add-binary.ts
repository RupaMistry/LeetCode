function addBinary(a: string, b: string): string {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    // Continue as long as there are digits or a carry left
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the value at current pointers, default to 0
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = digitA + digitB + carry;

        // Binary logic: sum can be 0, 1, 2, or 3
        // New digit is sum % 2, carry is 1 if sum >= 2
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
}