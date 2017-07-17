/**
 * Created by macintoshhd on 3/27/17.
 */
const http = require ('http');

http
.createServer((req, res) => {
 res.write('Hi from server!');
 res.end();
})
    .listen(1234);
//т.е . като стартирам браузера с localhost:1234 и ще видя ред 8.
//това е елементарен сървър!