function maxProfit(prices: number[]): number {
    if (prices.length === 0) return 0;

    // Initialize states
    // For buying, we start with extreme debt (Infinity cost)
    let buy1 = -Infinity;
    let sell1 = 0;
    let buy2 = -Infinity;
    let sell2 = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        // State 1: Maximize cash after 1st buy (minimize our debt/cost)
        buy1 = Math.max(buy1, -price);

        // State 2: Maximize profit after 1st sell
        sell1 = Math.max(sell1, buy1 + price);

        // State 3: Maximize cash after 2nd buy (using profit from sell1)
        buy2 = Math.max(buy2, sell1 - price);

        // State 4: Maximize final total profit after 2nd sell
        sell2 = Math.max(sell2, buy2 + price);
    }

    // The maximum profit achievable with at most two transactions
    return sell2;
}