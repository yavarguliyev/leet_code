/**
 * @param {string} columnTitle
 * @return {number}
 */
let titleToNumber = function(columnTitle) {
    let columnNumber = 0;
    const length = columnTitle.length;

    for (let i = 0; i < length; i++) {
        const charValue = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1; // Convert 'A'-'Z' to 1-26
        columnNumber = columnNumber * 26 + charValue;
    }

    return columnNumber;
};

module.exports = titleToNumber;
