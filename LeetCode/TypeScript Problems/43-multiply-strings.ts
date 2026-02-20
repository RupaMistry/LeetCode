function multiply(num1: string, num2: string): string {
    // Edge case: if either is "0", the product is "0"
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;
    const pos = new Array(m + n).fill(0);

    // Iterate from right to left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // Get the product of two digits
            const mul = Number(num1[i]) * Number(num2[j]);

            // Determine position in the array
            const p1 = i + j;
            const p2 = i + j + 1;

            // Add to existing value at p2 and handle carry
            const sum = mul + pos[p2];

            pos[p2] = sum % 10;
            pos[p1] += Math.floor(sum / 10);
        }
    }

    // Convert array to string, removing leading zero if it exists
    let result = pos.join('');
    return result.startsWith('0') ? result.substring(1) : result;
}