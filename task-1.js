// While a user is downloading a file which is X bytes in size,
// your job is to provide a function to estimate the time remaining in minutes.
// The system has a record of the amount (in bytes) B downloaded each minute.

// If the file is not completely downloaded,
// estimate the rate by taking the simple average of the last Z observations.

// Returns the amount of time remaining in minutes.
// X is an integer representing the file size.
// B is an array of integers listing the bytes downloaded at each minute
// starting from the beginning of the download until now.
// Z is an integer.
// Return an integer representing the number of minutes remaining.
// Note that:
// * Your estimate should be rounded up to the nearest integer (ceiling).
// * If the download is done, return 0
// * If you are unable to produce an estimate, return -1.
function timeRemaining(X, B, Z) {
  const bytesLastTwoMin = B.slice(B.length - Z, B.length).reduce((a, b) => a + b, 0);
  const averageOfLastTwoMin = bytesLastTwoMin / Z;
  const bytesRemaining = X - B.reduce((a, b) => a + b, 0);

  if (bytesRemaining <= 0) return 0; // If the download is done, return 0
  if (averageOfLastTwoMin <= 0) return -1; // If you are unable to produce an estimate, return -1.
  return Math.ceil(bytesRemaining / averageOfLastTwoMin);
}

// Example 1:
// 1. X=100, B=[10,6,6,8], Z=2
// 30 bytes = 10+6+6+8 have been downloaded.
// So 70 bytes remain.
// The average of the last two minutes (Z=2) is 7=(6+8)/2.
// So the function should return 10 minutes (=70/7).
let X = 100,
  B = [10, 6, 6, 8],
  Z = 2;
console.log(timeRemaining(X, B, Z));

// Example 2:
// 1. X=200, B=[12,7,16,5], Z=3
// 12+7+16+5 = 40 bytes have been downloaded.
// 200 - 40 = 160 bytes remain.
// The average of the last three minutes (Z=3) is (7+16+5)/3 = 9.3
// So the function should return 160 / 9.3 = 18 minutes.
(X = 200), (B = [12, 7, 16, 5]), (Z = 3);
console.log(timeRemaining(X, B, Z));

// Example 3:
// 1. X=200, B=[12,7,16,5], Z=3
// 12+7+16+5 = 40 bytes have been downloaded.
// 200 - 40 = 160 bytes remain.
// The average of the last three minutes (Z=3) is (7+16+5)/3 = 9.3
// So the function should return 160 / 9.3 = 18 minutes.
(X = 200), (B = [12, 7, 16, 5]), (Z = 3);
console.log(timeRemaining(X, B, Z));
