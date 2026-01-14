function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result[0] = i;
                result[1] = j;
                break;
            }
        }

        if (result[0] !== -1) {
            break;
        }
    }

    return result;
};

//  Typescript solution for LeetCode 2. Add Two Numbers