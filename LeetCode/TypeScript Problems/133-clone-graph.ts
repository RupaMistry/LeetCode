 class _Node {
      val: number
      neighbors: _Node[]
  
      constructor(val?: number, neighbors?: _Node[]) {
          this.val = (val===undefined ? 0 : val)
          this.neighbors = (neighbors===undefined ? [] : neighbors)
      }
  }
 

function cloneGraph(node: _Node | null): _Node | null {
    if (!node) return null;

    // Our tracking ledger: Maps original nodes to their corresponding clones
    const clonedMap = new Map<_Node, _Node>();

    function dfs(currentNode: _Node): _Node {
        // 1. If we have already cloned this node, return the cloned instance
        if (clonedMap.has(currentNode)) {
            return clonedMap.get(currentNode)!;
        }

        // 2. Create a deep copy of the current node (leave neighbors empty for a moment)
        const copy = new _Node(currentNode.val);

        // 3. Critically save this mapping BEFORE traveling to neighbors to prevent infinite cyclic loops
        clonedMap.set(currentNode, copy);

        // 4. Iterate through all neighbors of the original node, clone them, and link them up
        for (const neighbor of currentNode.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    }

    return dfs(node);
}