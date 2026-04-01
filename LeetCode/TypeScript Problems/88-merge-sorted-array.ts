function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // p1 and p2 track the largest remaining elements in each array
    let p1 = m - 1;
    let p2 = n - 1;

    // p is the "write" pointer, starting at the very end of nums1
    let p = m + n - 1;

    // While there are still elements to compare in both arrays
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // Important: If p2 still has elements, it means they are all smaller 
    // than the smallest element in nums1. We just copy them over.
    // Note: If p1 has elements left, they are already in the correct place!
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}