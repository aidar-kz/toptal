// From an integer X representing a time duration in seconds produce a simplified string representation.
// For example, given:
// 100
// You should output:
// 1m40s
// Use the following abbreviations w,d,h,m,s to represent:
// weeks, days, hours, minutes and seconds.

// Given an integer X, returns a string representing the duration.
// Only the two largest non-zero units should be used. Round up the second unit if necessary so that the output only has two units even though this might mean the output is for slightly more time than X seconds.
// round the second largest unit up
function solution(X) {
    const seconds = X % 60;
    const minutes = Math.floor(X / 60) % 60;
    const hours = Math.floor(X / 3600) % 24;
    const days = Math.floor(X / 86400) % 7;
    const weeks = Math.floor(X / 604800);

    const units = [
        { unit: 'w', value: weeks },
        { unit: 'd', value: days },
        { unit: 'h', value: hours },
        { unit: 'm', value: minutes },
        { unit: 's', value: seconds }
    ];

    let numOfUnits = 0;

    const result = units.filter(unit => unit.value > 0).map(unit => {
        numOfUnits++;
        if (numOfUnits === 1) {
            return `${unit.value}${unit.unit}`
        } else if (numOfUnits === 2 && unit.unit === 's') {
            return `${unit.value}${unit.unit}`
        } else if (numOfUnits === 2 && unit.unit !== 's') {
            return `${++unit.value}${unit.unit}`
        }
    }).join('');

    return result;
}

// Examples:
// 1. Given X=100, return "1m40s"
// 2. Given X=7263, return "2h2m". (7263s=2h1m3s, but this uses too many units, so we round the second largest unit up to 2h2m)
// 3. Given X=5, return "5s"
console.log(solution(0.0000000000000000000001));
console.log(solution(1));
console.log(solution(100));
// console.log(solution(7263));
// console.log(solution(7263222222));
console.log(solution(1000000000));
