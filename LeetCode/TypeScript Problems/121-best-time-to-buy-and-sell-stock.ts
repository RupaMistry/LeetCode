function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        // 1. If we found a new "all-time low," update our buy price
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } 
        // 2. Otherwise, check if selling today beats our previous record
        else if (currentPrice - minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        }
    }

    return maxProfit;
}