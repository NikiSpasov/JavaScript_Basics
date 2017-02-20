
function from0to999(num) {
    num = +num;
    let result = "";
    
    let digit = (num / 100) | 0;

    if (num === 0){
    console.log("Zero");
    }

    if (digit === 1) {
        result += "One hundred and ";
    }
    else if (digit === 2) {
        result += "Two hundred and ";
    }
    else if (digit === 3) {
        result += "Three hundred and ";
    }
    else if (digit === 4) {
        result += "Four hundred and ";
    }
    else if (digit === 5) {
        result += "Five hundred and ";
    }
    else if (digit === 6) {
        result += "Six hundred and ";
    }
    else if (digit === 7) {
        result += "Seven hundred and ";
    }
    else if (digit === 8) {
        result += "Eight hundred and ";

    }
    else if (digit === 9) {
        result += "Nine hundred and ";

    }
    let num2 = num % 100;

    switch (num2) {

        case 0:
            result += ""; break;
        case 1:
            result += "one"; break;
        case 2:
            result += "two"; break;
        case 3:
            result += "three"; break;
        case 4:
            result += "four"; break;
        case 5:
            result += "five"; break;
        case 6:
            result += "six"; break;
        case 7:
            result += "seven"; break;
        case 8:
            result += "eight"; break;
        case 9:
            result += "nine"; break;
        case 10:
            result += "ten"; break;
        case 11:
            result += "eleven"; break;
        case 12:
            result += "twelve"; break;
        case 13:
            result += "thirteen"; break;
        case 14:
            result += "fourteen"; break;
        case 15:
            result += "fifteen"; break;
        case 16:
            result += "sixteen"; break;
        case 17:
            result += "seventeen"; break;
        case 18:
            result += "eighteen"; break;
        case 19:
            result += "nineteen"; break;
    }
    if (num2 <= 19) {
        console.log(result.charAt(0).toUpperCase() + result.slice(1));
        return;
    }

    let num3 = (num2 / 10) | 0;

    if (num3 == 2) {
        result += "twenty";
    }
    else if (num3 == 3) {
        result += "thirty";
    }
    else if (num3 == 4) {
        result += "fourty";
    }
    else if (num3 == 5) {
        result += "fifty";
    }
    else if (num3 == 6) {
        result += "sixty";
    }
    else if (num3 == 7) {
        result += "seventy";
    }
    else if (num3 == 8) {
        result += "eighty";
    }
    else if (num3 == 9) {
        result += "ninety";
    }

    if (num2 % 10 == 0) {
        result += "";
    }
    else if (num2 % 10 == 1) {
        result += " one";
    }
    else if (num2 % 10 == 2) {
        result += " two";
    }
    else if (num2 % 10 == 3) {
        result += " three";
    }
    else if (num2 % 10 == 4) {
        result += " four";
    }
    else if (num2 % 10 == 5) {
        result += " five";
    }
    else if (num2 % 10 == 6) {
        result += " six";
    }
    else if (num2 % 10 == 7) {
        result += " seven";
    }
    else if (num2 % 10 == 8) {
        result += " eight";
    }
    else if (num2 % 10 == 9) {
        result += " nine";
    }
    console.log(result.charAt(0).toUpperCase() + result.slice(1));
}
from0to999(0);