/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
    if (n === 1) return 1; // Only one way to climb 1 step
    if (n === 2) return 2; // Two ways to climb 2 steps

    let first = 1; // Ways to climb to the 1st step
    let second = 2; // Ways to climb to the 2nd step
    let ways = 0;

    for (let i = 3; i <= n; i++) {
        ways = first + second; // The ways to climb to the ith step
        first = second; // Move to the next step
        second = ways; // Update the second for the next iteration
    }

    return ways; // Return the total ways to climb n steps
};

module.exports = climbStairs;
