function findKthLargest(nums: number[], k: number): number {
    const targetIndex = nums.length - k;

    // Helper function to perform partitioning
    const partition = (left: number, right: number, pivotIndex: number): number => {
        const pivotValue = nums[pivotIndex];
        // Move pivot to end
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (nums[i] < pivotValue) {
                [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
                storeIndex++;
            }
        }

        // Move pivot to its final place
        [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
        return storeIndex;
    };

    const quickSelect = (left: number, right: number): number => {
        if (left === right) return nums[left];

        // Randomly pick a pivot to avoid O(N^2) worst-case on sorted arrays
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const newPivotIndex = partition(left, right, pivotIndex);

        if (newPivotIndex === targetIndex) {
            return nums[newPivotIndex];
        } else if (newPivotIndex < targetIndex) {
            return quickSelect(newPivotIndex + 1, right);
        } else {
            return quickSelect(left, newPivotIndex - 1);
        }
    };

    return quickSelect(0, nums.length - 1);
}