function findSubstring(s: string, words: string[]): number[] {
    if (!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const result: number[] = [];
    
    // 1. Build the master frequency map
    const wordFreq = new Map<string, number>();
    for (const word of words) {
        wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    }

    // 2. Run sliding window wordLen times for different offsets
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        const currentFreq = new Map<string, number>();
        let count = 0;

        while (right + wordLen <= s.length) {
            // Get the word from the right side of the window
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordFreq.has(word)) {
                currentFreq.set(word, (currentFreq.get(word) || 0) + 1);
                count++;

                // If we have more of this word than allowed, shrink from left
                while ((currentFreq.get(word) || 0) > (wordFreq.get(word) || 0)) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentFreq.set(leftWord, currentFreq.get(leftWord)! - 1);
                    count--;
                    left += wordLen;
                }

                // If count matches total words, we found a start index
                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                // Word doesn't exist in words list, reset window
                currentFreq.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
}