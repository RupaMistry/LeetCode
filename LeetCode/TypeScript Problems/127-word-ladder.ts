function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);

    // If the target isn't even in the dictionary, it's impossible.
    if (!wordSet.has(endWord)) return 0;

    // Queue stores [current_word, level_count]
    const queue: [string, number][] = [[beginWord, 1]];

    while (queue.length > 0) {
        const [word, level] = queue.shift()!;

        // If we reached the target, return the count of words in the sequence
        if (word === endWord) return level;

        // Try changing every character of the current word
        for (let i = 0; i < word.length; i++) {
            const originalChar = word[i];

            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                const newChar = String.fromCharCode(c);
                if (newChar === originalChar) continue;

                const nextWord = word.slice(0, i) + newChar + word.slice(i + 1);

                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, level + 1]);
                    // Important: Remove from set to act as "visited"
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0;
}