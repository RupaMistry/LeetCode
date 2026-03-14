function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 2;
    let right = Math.floor(x / 2);
    let result = 1; // Default for x >= 1

    while (left <= right) {
        // Find the middle point
        const mid = Math.floor(left + (right - left) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            // This mid could be the answer, but check for a larger one
            result = mid;
            left = mid + 1;
        } else {
            // Too large, search lower
            right = mid - 1;
        }
    }

    return result;
}