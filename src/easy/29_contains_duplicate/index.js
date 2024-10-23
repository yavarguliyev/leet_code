/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    const seen = new Set(); // Create a set to store seen numbers

    for (const num of nums) {
        if (seen.has(num)) { // Check if the number is already in the set
            return true; // Duplicate found
        }
        seen.add(num); // Add the number to the set
    }

    return false; // No duplicates found
};

module.exports = containsDuplicate;
