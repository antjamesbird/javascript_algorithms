
/**
 * A function that returns the number of valleys that a hiker has gone through
 * @param {Number} n - number of steps taken
 * @param {String} ar - Steps taken. U is up D is Down.. eg UUDDDUUD
 */
function countingValleys(n, s) {
  let step = 0;
  const steps = [0];
  const valleys = [0];
  const negatives = [];
  let count = 0;
  for (let position of s) {
    count++;
    position === "U" ? step++ : step--;
    steps.push(step);
    // Get the previous step in the array, if it's negative we know that it is a valley..
    if (Math.sign(steps[steps.length - 2]) === -1) {
      negatives.push(step);
      if (step === 0) {
        valleys.push(step);
      }
    }
    // Add the last step
    if (count === s.length && Math.sign(steps[steps.length - 2]) === 1) {
      valleys.push(step);
      console.log("last char", position);
    }
  }

  if (valleys.length === 2 && negatives.length === 0) {
    valleys = [];
  }
  return Math.floor(valleys.length / 2);
}
