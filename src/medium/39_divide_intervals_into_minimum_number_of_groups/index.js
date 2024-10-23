/**
 * @param {number[][]} intervals
 * @return {number}
 */
let minGroups = function(intervals) {
    // Step 1: Create an array of events (start and end)
    let events = [];
    
    for (let [start, end] of intervals) {
        events.push([start, 1]);    // Start of an interval (+1)
        events.push([end + 1, -1]); // End of an interval (-1)
    }
    
    // Step 2: Sort events first by time, then by type (start before end)
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // if same time, end (-1) should come after start (1)
        }
        return a[0] - b[0]; // otherwise sort by time
    });
    
    // Step 3: Sweep through events and calculate the maximum active intervals
    let maxGroups = 0;
    let active = 0;
    
    for (let [time, type] of events) {
        active += type; // Increase for start, decrease for end
        maxGroups = Math.max(maxGroups, active);
    }
    
    return maxGroups;
};

module.exports = minGroups;
