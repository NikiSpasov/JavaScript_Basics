function solve(args) {
    let numbers = +args[0],
        curNum,
        totalSum = +args[1],
        index = 2;

    if (totalSum % 2 === 0) {
        index = 3;
    }
    for (let i = index; i <= numbers; i += 1) {
        curNum = +args[i];
        if (curNum % 2 === 0) {
            totalSum += curNum;
            i += 1;
        } else {
            totalSum *= curNum;
        }

        totalSum %= 1024;
    }

    console.log(totalSum);
}
solve ['10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'];
