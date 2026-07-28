function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const inDegree = new Array<number>(numCourses).fill(0);
    const graph: number[][] = Array.from({ length: numCourses }, () => []);

    // 1. Build the adjacency list and in-degree counts
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    // 2. Queue all courses that have 0 prerequisites
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const order: number[] = [];

    // 3. Process courses in topological order
    while (queue.length > 0) {
        const current = queue.shift()!;
        order.push(current);

        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            // Once all prerequisites for this course are satisfied, add to queue
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // 4. If all courses are present in order, return it; otherwise, a cycle exists
    return order.length === numCourses ? order : [];
}