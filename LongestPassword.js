// Given a non-empty string S consisting of N characters,
// returns the length of the longest word from the string that is a valid password.
//     - it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
//     - there should be an even number of letters;
//     - there should be an odd number of digits.
// If there is no such word, returns −1.
// N is an integer within the range [1..200];
// string S consists only of printable ASCII characters and spaces.
function solution(S) {
    const words = S.split(' ');

    const validPasswords = words.filter(word => {
        if (typeof word !== 'string') return false;

        // it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
        const isAlphanumeric = /^[a-zA-Z\d]+$/.test(word);

        // get number of alphabetical characters in string
        const alphabeticalCharacters = word.match(/[a-zA-Z]/g);

        let isEvenNumberOfLetters = false;
        if (alphabeticalCharacters) {
            // there should be an even number of letters;
            isEvenNumberOfLetters = alphabeticalCharacters.length % 2 === 0;
        }
        if (!isEvenNumberOfLetters) return false;

        // get number of digits in string
        const digits = word.match(/\d/g);
        if (!digits) return false;

        // there should be an odd number of digits.
        const isOddNumberOfDigits = digits.length % 2 === 1;
        if (!isOddNumberOfDigits) return false;

        return isAlphanumeric && isEvenNumberOfLetters && isOddNumberOfDigits;
    })

    if (validPasswords.length === 0) return -1;
    // get longest element from array
    return validPasswords.sort((a, b) => b.length - a.length)[0].length;
}

const S = "test 5 a0A pass007 ?xy1" // your function should return 7, as explained above.
let result = solution(S);
console.log(result);