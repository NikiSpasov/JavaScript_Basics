function oddOrEven (string){
var a = +string;
if (a % 5 == 0 && a % 7 == 0) {
console.log("true " + a);
}
else{
    console.log("false " + a);
}
}
oddOrEven(35);
oddOrEven(25);
oddOrEven(70);