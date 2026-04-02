function grayCode(n: number): number[] {
    // We start with the base case for n = 0
    let result = [0];

    // We build up from 1 to n
    for (let i = 0; i < n; i++) {
        // The value to add to the reflected part (the i-th bit)
        // 1 << i is basically 2^i
        const addBit = 1 << i;

        // We iterate backwards through our current result to "reflect" it
        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] | addBit);
        }
    }

    return result;
}