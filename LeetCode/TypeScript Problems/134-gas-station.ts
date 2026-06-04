function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalTank = 0;   // Determines if a global solution exists
    let currentTank = 0; // Tracks the current sub-trip tank level
    let startingStation = 0;

    for (let i = 0; i < gas.length; i++) {
        const netGas = gas[i] - cost[i];
        
        totalTank += netGas;
        currentTank += netGas;

        // If our current tank drops below zero, we cannot proceed further from our current starting station.
        if (currentTank < 0) {
            // Pick the next station as the new starting candidate
            startingStation = i + 1;
            // Empty the tank for the fresh start
            currentTank = 0;
        }
    }

    // If total gas is less than total cost, completing the circuit is impossible.
    // Otherwise, the problem guarantees that a unique solution exists.
    return totalTank >= 0 ? startingStation : -1;
}