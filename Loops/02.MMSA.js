function MMSA(nums){

    let minValue = 10000000;
    let maxValue = -10000000;
    let sum = +0;
    let cnt = 0;
    let avg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (+nums[i] < minValue){
            minValue = +nums[i];
        }
        if (+nums[i] > maxValue){
            maxValue = +nums[i];
        }
        sum += +nums[i];
        cnt = cnt + 1;
    }
    avg = sum / cnt;

console.log("min=" + minValue.toFixed(2));
console.log("max=" + maxValue.toFixed(2));
console.log("sum=" + sum.toFixed(2));
console.log("avg=" + avg.toFixed(2));
} 


MMSA(['2', '5', '1']);