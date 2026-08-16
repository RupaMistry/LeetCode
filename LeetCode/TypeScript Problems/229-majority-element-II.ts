function majorityElement(nums: number[]): number[] {
    let candidate1: number | null = null;
    let candidate2: number | null = null;
    let count1 = 0;
    let count2 = 0;

    // 1. First Pass: Find potential candidates
    for (const num of nums) {
        if (candidate1 !== null && num === candidate1) {
            count1++;
        } else if (candidate2 !== null && num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // 2. Second Pass: Verify if the candidates actually exceed n / 3 threshold
    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const threshold = Math.floor(nums.length / 3);
    const result: number[] = [];

    if (candidate1 !== null && count1 > threshold) result.push(candidate1);
    if (candidate2 !== null && count2 > threshold) result.push(candidate2);

    return result;
} 