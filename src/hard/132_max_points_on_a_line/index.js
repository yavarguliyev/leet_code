/**
 * @param {number[][]} points
 * @return {number}
 */
let maxPoints = function(points) {
  const gcd = (a, b) => {
      while (b) {
          [a, b] = [b, a % b];
      }
      return a;
  };

  if (points.length <= 2) return points.length; // Edge case for 0, 1, or 2 points

  let maxCount = 0;

  for (let i = 0; i < points.length; i++) {
      const slopes = {};
      let duplicate = 1; // Count of duplicates for the point itself

      for (let j = i + 1; j < points.length; j++) {
          const dx = points[j][0] - points[i][0];
          const dy = points[j][1] - points[i][1];

          if (dx === 0 && dy === 0) {
              // Same point
              duplicate++;
              continue;
          }

          // Normalize the slope
          const g = gcd(dx, dy);
          const slope = `${dy / g},${dx / g}`; // Use string as a key

          slopes[slope] = (slopes[slope] || 0) + 1;
      }

      const localMax = Math.max(...Object.values(slopes), 0) + duplicate; // Add duplicates to the max
      maxCount = Math.max(maxCount, localMax);
  }

  return maxCount;
};

module.exports = maxPoints;