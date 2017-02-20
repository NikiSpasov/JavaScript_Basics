function HexToDecimal ([hex]) {

        let result = 0;
        for (let i = 0; i < hex.length; i++)
        {
            switch (hex[hex.length - 1 - i])
            {
                case '0':
                    result += 0; break;
                case '1':
                    result += 1 * Math.pow(16, i); break;
                case '2':
                    result += 2 * Math.pow(16, i); break;
                case '3':
                    result += 3 * Math.pow(16, i); break;
                case '4':
                    result += 4 * Math.pow(16, i); break;
                case '5':
                    result += 5 * Math.pow(16, i); break;
                case '6':
                    result += 6 * Math.pow(16, i); break;
                case '7':
                    result += 7 * Math.Pow(16, i); break;
                case '8':
                    result += 8 * Math.pow(16, i); break;
                case '9':
                    result += 9 * Math.pow(16, i); break;
                case 'A':
                    result += 10 * Math.pow(16, i); break;
                case 'B':
                    result += 11 * Math.pow(16, i); break;
                case 'C':
                    result += 12 * Math.pow(16, i); break;
                case 'D':
                    result += 13 * Math.pow(16, i); break;
                case 'E':
                    result += 14 * Math.pow(16, i); break;
                case 'F':
                    result += 15 * Math.pow(16, i); break;
            }
        }
        console.log(result);
    }

HexToDecimal(['1AE3']);