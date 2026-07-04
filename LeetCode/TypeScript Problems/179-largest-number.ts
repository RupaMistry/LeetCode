function largestNumber(nums: number[]): string {
    // 1. Convert all numbers into strings so we can perform character-level comparisons
    const strNums = nums.map(num => num.toString());

    // 2. Sort strings using a custom combination rule
    // If combining B with A creates a larger string than A with B, B should come first.
    strNums.sort((a, b) => {
        const order1 = a + b;
        const order2 = b + a;
        // Sorts in descending order based on the concatenation results
        return order2.localeCompare(order1);
    });

    // 3. Edge Case Protection: If the largest number is "0", the whole output must just be "0"
    // This stops inputs like [0, 0] from spitting out "00"
    if (strNums[0] === "0") {
        return "0";
    }

    // 4. Merge the array into a single continuous number string
    return strNums.join('');
}