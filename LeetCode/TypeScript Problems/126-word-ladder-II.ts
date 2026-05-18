function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    // Map to store: word -> [list of parents that lead to it at the SHORTEST distance]
    const parents = new Map<string, string[]>();
    // Tracks the shortest distance discovered so far for each word
    const distance = new Map<string, number>();

    const queue: string[] = [beginWord];
    distance.set(beginWord, 0);

    let found = false;

    // --- Phase 1: BFS to find the shortest distance and parents ---
    while (queue.length > 0 && !found) {
        const levelSize = queue.length;
        // Use a temporary map to store distances for the current level
        // so we don't block other equal-length paths
        const currentLevelNodes = new Map<string, number>();

        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift()!;
            const d = distance.get(word)!;

            if (word === endWord) {
                found = true;
                break;
            }

            // Standard "Human" optimization: mutate string characters
            for (let j = 0; j < word.length; j++) {
                for (let c = 97; c <= 122; c++) {
                    const char = String.fromCharCode(c);
                    if (char === word[j]) continue;

                    const next = word.slice(0, j) + char + word.slice(j + 1);

                    if (wordSet.has(next)) {
                        const newDist = d + 1;

                        // If we haven't seen this word, or we found it at the SAME shortest distance
                        if (!distance.has(next) || newDist <= (distance.get(next) || Infinity)) {
                            if (!distance.has(next)) {
                                distance.set(next, newDist);
                                queue.push(next);
                            }

                            // Log the parent for the DFS phase
                            if (!parents.has(next)) parents.set(next, []);
                            parents.get(next)!.push(word);
                        }
                    }
                }
            }
        }
    }

    // --- Phase 2: Backtracking (DFS) from endWord back to beginWord ---
    const results: string[][] = [];
    if (!found) return results;

    const path: string[] = [endWord];

    function backtrack(curr: string) {
        if (curr === beginWord) {
            results.push([...path].reverse());
            return;
        }

        const pList = parents.get(curr) || [];
        for (const p of pList) {
            path.push(p);
            backtrack(p);
            path.pop();
        }
    }

    backtrack(endWord);
    return results;
}