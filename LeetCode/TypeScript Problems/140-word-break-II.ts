function wordBreak(s: string, wordDict: string[]): string[] {
    const wordSet = new Set(wordDict);
    // memo stores: substring -> list of valid sentences that can be formed from it
    const memo = new Map<string, string[]>();

    function dfs(currentStr: string): string[] {
        // 1. Check our diary. If we've already calculated results for this string, return it.
        if (memo.has(currentStr)) {
            return memo.get(currentStr)!;
        }

        // Base case: if the string is empty, return an array containing an empty string
        // so that the stitching loop can execute once.
        if (currentStr === "") {
            return [""];
        }

        const validSentences: string[] = [];

        // 2. Try slicing the current string at every possible position
        for (let i = 1; i <= currentStr.length; i++) {
            const prefix = currentStr.slice(0, i);

            // If the starting chunk is a valid dictionary word
            if (wordSet.has(prefix)) {
                const suffix = currentStr.slice(i);
                
                // Recursively get all valid sentences for the rest of the string
                const suffixSubSentences = dfs(suffix);

                // 3. Stitch the current prefix to all valid suffix sentences
                for (const subSentence of suffixSubSentences) {
                    if (subSentence === "") {
                        validSentences.push(prefix); // No trailing space needed for the last word
                    } else {
                        validSentences.push(prefix + " " + subSentence);
                    }
                }
            }
        }

        // 4. Save our hard work to the diary before returning
        memo.set(currentStr, validSentences);
        return validSentences;
    }

    return dfs(s);
}