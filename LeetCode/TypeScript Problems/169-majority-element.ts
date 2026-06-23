function majorityElement(nums: number[]): number {
    let candidate = 0;
    let votes = 0;

    // Run a linear sweep through the array
    for (const num of nums) {
        // If the current candidate's political capital drops to 0, 
        // the current element takes over the lead.
        if (votes === 0) {
            candidate = num;
        }

        // Upvote if it matches the current candidate, downvote if it's an opponent
        if (num === candidate) {
            votes++;
        } else {
            votes--;
        }
    }

    // The problem statement guarantees that a majority element always exists,
    // so the surviving candidate is mathematically guaranteed to be the answer.
    return candidate;
}