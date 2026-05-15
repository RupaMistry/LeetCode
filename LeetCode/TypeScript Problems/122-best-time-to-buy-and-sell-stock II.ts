function maxProfit(prices: number[]): number {
    let totalProfit = 0;

    // Start from day 1 (index 1) and compare it to the day before
    for (let i = 1; i < prices.length; i++) {
        // If today's price is higher than yesterday's, capture the profit!
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }

    return totalProfit;
}