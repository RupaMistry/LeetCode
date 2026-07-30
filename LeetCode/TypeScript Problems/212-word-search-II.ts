class TrieNode {
    children: { [key: string]: TrieNode };
    word: string | null;

    constructor() {
        this.children = {};
        this.word = null; // Stores the complete word if this node ends a word
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const root = new TrieNode();

    // 1. Build the Trie from the word list
    for (const word of words) {
        let current = root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.word = word; // Store the full word at the leaf node
    }

    const rows = board.length;
    const cols = board[0].length;
    const result: string[] = [];

    // 2. DFS Backtracking helper
    const dfs = (r: number, c: number, node: TrieNode): void => {
        // Out of bounds check
        if (r < 0 || c < 0 || r >= rows || c >= cols) return;

        const char = board[r][c];

        // If cell is already visited ('#') or character is not in current Trie branch
        if (char === '#' || !node.children[char]) return;

        const nextNode = node.children[char];

        // Match found!
        if (nextNode.word !== null) {
            result.push(nextNode.word);
            nextNode.word = null; // De-duplicate so the same word isn't added twice
        }

        // Mark cell as visited in-place
        board[r][c] = '#';

        // Explore all 4 cardinal directions
        dfs(r + 1, c, nextNode); // Down
        dfs(r - 1, c, nextNode); // Up
        dfs(r, c + 1, nextNode); // Right
        dfs(r, c - 1, nextNode); // Left

        // Backtrack: restore cell character
        board[r][c] = char;
    };

    // 3. Launch DFS from every cell in the matrix
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (root.children[board[r][c]]) {
                dfs(r, c, root);
            }
        }
    }

    return result;
}