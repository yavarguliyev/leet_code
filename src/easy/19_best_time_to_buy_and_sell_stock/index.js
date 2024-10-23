/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let maxProfit = 0; // Initialize maximum profit
    let minPrice = Infinity; // Start with a very high minimum price

    for (let price of prices) {
        // Update the minimum price if the current price is lower
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate profit and update maxProfit if it's higher
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit; // Return the maximum profit
};

module.exports = maxProfit;
