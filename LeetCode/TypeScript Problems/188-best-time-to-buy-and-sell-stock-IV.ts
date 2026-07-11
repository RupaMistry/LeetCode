function maxProfit(k: number, prices: number[]): number {
    const n = prices.length;
    if (n <= 1 || k === 0) return 0;

    // 1. Optimization Shortcut: If k allows a transaction every other day, 
    // the problem collapses into an unlimited transaction sandbox.
    if (k >= n / 2) {
        let maxProfitGreedy = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfitGreedy += prices[i] - prices[i - 1];
            }
        }
        return maxProfitGreedy;
    }

    // 2. Initialize DP Tracking Arrays
    // buy[j] stores max profit at transaction j while holding a stock
    const buy: number[] = new Array(k + 1).fill(-Infinity);
    // sell[j] stores max profit at transaction j holding liquid cash
    const sell: number[] = new Array(k + 1).fill(0);

    // 3. Process daily prices linearly
    for (const price of prices) {
        for (let j = 1; j <= k; j++) {
            // Maximize holding state: keep yesterday's hold OR buy at today's price using cash from (j-1)
            buy[j] = Math.max(buy[j], sell[j - 1] - price);

            // Maximize cash state: keep yesterday's cash OR sell today's holding at current market price
            sell[j] = Math.max(sell[j], buy[j] + price);
        }
    }

    // The maximum profit achievable within k transactions will sit in the final liquid tier
    return sell[k];
}