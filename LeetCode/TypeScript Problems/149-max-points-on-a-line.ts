function maxPoints(points: number[][]): number {
    const n = points.length;
    if (n <= 2) return n; // Any 2 points or fewer will always form a straight line

    let globalMax = 1;

    // Helper function to find the Greatest Common Divisor
    function getGCD(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // 1. Iterate through every point to treat it as a fixed anchor
    for (let i = 0; i < n; i++) {
        const slopeMap = new Map<string, number>();
        let localMax = 0;

        const [x1, y1] = points[i];

        // 2. Compare the anchor with every subsequent point
        for (let j = i + 1; j < n; j++) {
            const [x2, y2] = points[j];

            let dy = y2 - y1;
            let dx = x2 - x1;

            // Handle edge cases for perfectly vertical or horizontal lines safely
            if (dx === 0) {
                dy = 1; // Standardized vertical slope representation
            } else if (dy === 0) {
                dx = 1; // Standardized horizontal slope representation
            } else {
                // Reduce the fraction using GCD to eliminate precision bugs
                const gcd = getGCD(Math.abs(dy), Math.abs(dx));
                dy /= gcd;
                dx /= gcd;

                // Ensure the negative sign is consistently placed (prefer tracking "-1/2" over "1/-2")
                if (dx < 0) {
                    dy = -dy;
                    dx = -dx;
                }
            }

            // 3. Stringify the fractional slope to serve as a clean hash key
            const slopeKey = `${dy}/${dx}`;
            const count = (slopeMap.get(slopeKey) || 0) + 1;
            slopeMap.set(slopeKey, count);

            localMax = Math.max(localMax, count);
        }

        // Add 1 to include the anchor point itself in the line tally
        globalMax = Math.max(globalMax, localMax + 1);
    }

    return globalMax;
}