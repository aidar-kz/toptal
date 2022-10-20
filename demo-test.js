// Your score is defined by hidden correctness test cases.

/**
 * Given an array A of N integers, returns the smallest
 * positive integer (greater than 0) that does not occur in A.
 *
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 *
 * Given A = [1, 2, 3], the function should return 4.
 *
 * Given A = [−1, −3], the function should return 1.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 *         - N is an integer within the range [1..100,000];
 *         - each element of array A is an integer within the range [−1,000,000..1,000,000].
 * @param A
 */
function solution(A) {
    A = A.filter(n => n >= 1).sort();

    let x = 1;

    for (let i = 0; i < A.length; i++) {
        if (x < A[i]) return x;
        x = A[i] + 1;
    }

    return x;
}

let A = [1, 3, 6, 4, 1, 2];
let result = solution(A);
console.log(result);

A = [1, 2, 3] // the function should return 4.
result = solution(A);
console.log(result);

A = [-1, -3] // the function should return 1.
result = solution(A);
console.log(result);
