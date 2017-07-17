/**
 * Created by macintoshhd on 3/27/17.
 */
require('./dog');
let cat = new Object();
    cat.name = 'Kotioo';
    cat.age = 31;
console.log(cat.name);

//module.exports = cat; //дава достъп на другите файлове до обекта!
//module.exports = function () {
//    console.log('i\'m a function!');
//    return ' ';

//};

//ако искаме и двете да се експортнат:
module.exports = {
    theCat: cat,
    theFunc: function () {
            console.log('i\'m a function!');
            return ' ';
        }
};