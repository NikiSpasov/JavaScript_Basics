function thirdBit(args){
const num = +args >> 3;
const result = num & 1;
console.log(result);
}