function MMSA(num){
    num = +num[0];
    let result = "";

    for (let i = 1; i <= num; i++) {
         for (let j = i; j < num + i; j++){
             
             result += j + " ";
         }
         console.log(result);
         result = "";
    }
} 


MMSA(['3']);