function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree = new Array<number>(numCourses).fill(0);
    const graph: number[][] = Array.from({ length: numCourses }, () => []);

    // 1. Build adjacency list and compute in-degrees
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    // 2. Add all courses with 0 prerequisites to the queue
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let completedCourses = 0;

    // 3. Process BFS
    while (queue.length > 0) {
        const current = queue.shift()!;
        completedCourses++;

        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // 4. If processed count matches total courses, no cycles existed
    return completedCourses === numCourses;
}