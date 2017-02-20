function rectangleArea (string){
var width = +string[0];
var height = +string[1];
var area = width * height;
var perimeter = 2*width + 2*height;

console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}
rectangleArea([ '3', '4' ]);