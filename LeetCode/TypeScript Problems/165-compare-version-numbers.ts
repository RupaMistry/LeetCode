function compareVersion(version1: string, version2: string): number {
    // 1. Split the versions into arrays of string segments
    const v1Segments = version1.split('.');
    const v2Segments = version2.split('.');

    // 2. Loop up to the length of the version with the most segments
    const maxLength = Math.max(v1Segments.length, v2Segments.length);

    for (let i = 0; i < maxLength; i++) {
        // 3. Parse strings into integers. If out of bounds, default to 0.
        // Number() or parseInt() naturally strip out leading zeros.
        const num1 = i < v1Segments.length ? Number(v1Segments[i]) : 0;
        const num2 = i < v2Segments.length ? Number(v2Segments[i]) : 0;

        // 4. Return the evaluation as soon as a mismatch is detected
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    // If the loop finishes smoothly, the versions are functionally equal
    return 0;
}