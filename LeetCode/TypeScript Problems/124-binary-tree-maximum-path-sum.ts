
 // Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.left = (left===undefined ? null : left)
           this.right = (right===undefined ? null : right)
       }
   }
   

function maxPathSum(root: TreeNode | null): number {
    // We need a global-ish variable to track the highest sum we've seen so far
    let globalMax = -Infinity;

    function getGain(node: TreeNode | null): number {
        if (!node) return 0;

        // 1. Recursively get the max gain from left and right children.
        // If a gain is negative, we treat it as 0 (we don't include it).
        const leftGain = Math.max(getGain(node.left), 0);
        const rightGain = Math.max(getGain(node.right), 0);

        // 2. The "Curve" logic: Calculate the price of a path that 
        // peaks at this current node and connects both children.
        const currentPathSum = node.val + leftGain + rightGain;

        // Update the global maximum if this "curve" is the best we've seen.
        globalMax = Math.max(globalMax, currentPathSum);

        // 3. The "Line" logic: Return the node value plus the ONE best 
        // child to the parent so the path can continue upwards.
        return node.val + Math.max(leftGain, rightGain);
    }

    getGain(root);
    return globalMax;
}