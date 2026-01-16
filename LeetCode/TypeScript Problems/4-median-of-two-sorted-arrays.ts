function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the shorter array to keep binary search efficient
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        // i is the partition index for nums1
        // j is the partition index for nums2
        const i = Math.floor((low + high) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        // Boundary values
        const maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
        const minRight1 = (i === m) ? Infinity : nums1[i];

        const maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
        const minRight2 = (j === n) ? Infinity : nums2[j];

        // Check if we found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // If total length is odd
            if ((m + n) % 2 !== 0) {
                return Math.max(maxLeft1, maxLeft2);
            }
            // If total length is even
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } 
        // If we are too far right in nums1, move left
        else if (maxLeft1 > minRight2) {
            high = i - 1;
        } 
        // If we are too far left in nums1, move right
        else {
            low = i + 1;
        }
    }

    return 0.0;
}