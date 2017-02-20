function from1toN(num){
    num = +num;
    let result = "";
for (var i = 0; i < num; i++) {
    result += " " + (1 + i);  
} 
console.log(result);
}
from1toN(5);