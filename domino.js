console.clear();

/**
 * Given a string S, representing domino tiles chain. 
 * Each tile has L-R format, where L and R are numbers from 1..6 range. Tiles are separated by the comma. Some examples of valid S chain are:
 * @param {*} S 
 */
function domino(S) {
    const arr = S.split(',');
    if (arr.length === 1) return 1;
    let recentRight = 0;
    let currentCount = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const tile = arr[i].split("-");
        const left = tile[0];
        const right = tile[1];
        if (left === recentRight) currentCount++;
        else {
            if (currentCount > count) count = currentCount;
            currentCount = 1;
        }
        recentRight = right;
        if (currentCount > count) count = currentCount;
    }
    return count;
}

console.log(domino("1-1")); // 1
console.log(domino("6-3")); // 1
console.log(domino("1-2,1-2")); // 1
console.log(domino("3-2,2-1,1-4,4-4,5-4,4-2,2-1")); // 4
console.log(domino("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5")); // 7
console.log(domino("1-1,3-5,5-5,5-4,4-2,1-3")); // 4
console.log(domino("1-2,2-2,3-3,3-4,4-5,1-1,1-2")); // 3
