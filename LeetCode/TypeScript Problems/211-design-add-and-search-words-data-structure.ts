class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /** Adds a word into the data structure. */
    addWord(word: string): void {
        let current = this.root;

        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }

        current.isEndOfWord = true;
    }

    /** Returns true if the word is in the data structure, supporting '.' as any character. */
    search(word: string): boolean {
        const dfs = (node: TrieNode, index: number): boolean => {
            // Base case: we reached the end of the word pattern
            if (index === word.length) {
                return node.isEndOfWord;
            }

            const char = word[index];

            // Case 1: Wildcard '.' matches any existing child branch
            if (char === '.') {
                for (const childChar in node.children) {
                    if (dfs(node.children[childChar], index + 1)) {
                        return true;
                    }
                }
                return false;
            }

            // Case 2: Regular character match
            if (!node.children[char]) {
                return false;
            }

            return dfs(node.children[char], index + 1);
        };

        return dfs(this.root, 0);
    }
}