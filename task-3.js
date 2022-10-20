console.clear();

// A function which considers the excess S and allocates it fairly.
// Allocation proceeds from the largest to the smallest invoice.
// And is distributed as the ratio of the invoice's contribution
// to the sum of itself and those which follow.
// Example 1:
// Given S="300.01" and B=["300.00","200.00","100.00"].
// R[0] = "150.00" (=300.01 * 300.00/600.00)
// R[1] = "100.00" (=150.01 * 200.00/300.00)
// R[2] = "50.01" (=50.01 * 100.00/100.00)

// Example 2 (Pay careful attention to this one):
// Given S="1.00" and B=["0.05","1.00"].
// 1. First we consider 1.00 because it is the largest,
//   a. 1.00 * 1.00 / 1.05 ~= 0.95238
//   b. Round 0.95238... to "0.95". Rounding down to carry pennies to smaller departments.
function solution(S, B) {
    let sum = 0;
    for (let i = 0; i < B.length; i++) {
        sum += B[i] * Math.pow(S, i);
    }
    console.log(sum)
}

const S="300.01", B=["300.00","200.00","100.00"];

solution(S, B);
