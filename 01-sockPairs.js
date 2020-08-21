/**
 * A function that returns the number of sock pairs
 * @param {Number} n - number of socks in array
 * @param {Array} ar - array of socks
 */
function sockMerchant(n, ar) {
  const socks = {};
  let pairs = 0;
  // Get a representation of our socks on an object
  ar.forEach((sock) => {
    if (socks.hasOwnProperty(sock)) {
      socks[sock]++;
    } else {
      socks[sock] = 1;
    }
  });

  // Find pairs
  const keys = Object.keys(socks);
  keys.forEach((sock) => pairs += Math.floor(socks[sock] / 2));

  return pairs;
}