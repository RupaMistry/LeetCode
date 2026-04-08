class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function generateTrees(n: number): (TreeNode | null)[] {
    if (n === 0) return [];

    function buildTrees(start: number, end: number): (TreeNode | null)[] {
        const allTrees: (TreeNode | null)[] = [];

        // Base case: no numbers left to form a tree
        if (start > end) {
            allTrees.push(null);
            return allTrees;
        }

        // Try every number in the range as the root
        for (let i = start; i <= end; i++) {
            // Generate all possible left and right subtrees
            const leftSubtrees = buildTrees(start, i - 1);
            const rightSubtrees = buildTrees(i + 1, end);

            // Connect every left subtree to every right subtree with root i
            for (const left of leftSubtrees) {
                for (const right of rightSubtrees) {
                    const root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    allTrees.push(root);
                }
            }
        }

        return allTrees;
    }

    return buildTrees(1, n);
}