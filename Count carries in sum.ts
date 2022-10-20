// export default {};
console.clear();

/**
 * Given two numbers, the task is to find the number of
 * carry operations required when two numbers are added as below.
 */
const checkCarries = (input1: number, input2: number) => {
  const digits1 = input1.toString().split("").reverse();
  const digits2 = input2.toString().split("").reverse();
  const longerArr = [...(digits1.length > digits2.length ? digits1 : digits2)];
  const shorterArr = [...(digits2.length > digits1.length ? digits1 : digits2)];

  const carries = {
    count: 0,
    currentCarry: 0,
  };

  for (let i = 0; i < longerArr.length; i++) {
    const num1 = parseInt(longerArr[i] || "0");
    const num2 = parseInt(shorterArr[i] || "0");
    if (i >= shorterArr.length && carries.currentCarry === 0) {
      break;
    }

    if (num1 + num2 + carries.currentCarry > 9) {
      carries.count++;
      carries.currentCarry = 1;
    } else {
      carries.currentCarry = 0;
    }
  }

  return carries.count;
};

function carryOperationsCount(num1: number, num2: number) {
  let carriesCount = 0;

  while (num1 != 0 || num2 != 0) {
    let carry = 0;
    const ch1 = num1 % 10;
    const ch2 = num2 % 10;

    num1 = num1 / 10 ? num1 / 10 : 0;
    num2 = num2 / 10 ? num2 / 10 : 0;

    if (ch1 + ch2 + carry > 10) {
      carry = ch1 + ch2 + carry - 10;
      carriesCount++;
    } else {
      carry = 0;
    }
  }
  return carriesCount;
}

// Example 1
let input1 = 1234;
let input2 = 5678;
// let output = checkCarries(input1, input2);
let output = carryOperationsCount(input1, input2);
console.log(output); // 2
