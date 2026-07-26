class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /** Inserts a word into the trie. */
    insert(word: string): void {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }

        current.isEndOfWord = true;
    }

    /** Returns true if the word is in the trie. */
    search(word: string): boolean {
        const node = this.searchPrefix(word);
        return node !== null && node.isEndOfWord;
    }

    /** Returns true if there is any word in the trie that starts with the given prefix. */
    startsWith(prefix: string): boolean {
        return this.searchPrefix(prefix) !== null;
    }

    /** Helper function to traverse the Trie and return the destination node. */
    private searchPrefix(prefix: string): TrieNode | null {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children.has(char)) {
                return null;
            }
            current = current.children.get(char)!;
        }

        return current;
    }
}