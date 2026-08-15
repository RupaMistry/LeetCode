function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
const n = nums.length;
let i = 0;

while (i < n)
{
    const start = nums[i];

    // Traverse consecutive elements
    while (i + 1 < n && nums[i + 1] === nums[i] + 1)
    {
        i++;
    }

    const end = nums[i];

    // Format single number vs range
    if (start === end)
    {
        result.push(`${ start}`);
    }
    else
    {
        result.push(`${ start}->${ end}`);
    }

    i++;
}

return result;
} 