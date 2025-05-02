
var num1 = [10, 20, 30, 40, 50];
var num2 = [60, 70, 80, 90, 100];

document.writeln("<h1>" + "Concat array : " + num1.concat(num2) + "</h1>");
document.writeln("<h1>**********************************************</h1>");

var num3 = num1.concat(num2);
document.writeln("<h1>" + "Copy of Concat array : " + num3 + "</h1>");
document.writeln("<h1>**********************************************</h1>");

var num3 = [...num1, ...num2];
document.writeln("<h1>" + "Copy of Concat array : " + num3 + "</h1>");
document.writeln("<h1>**********************************************</h1>");

var num4 = [...num3, 11];
document.writeln("<h1>" + "Adding new value in copy array : " + num4 + "</h1>");
document.writeln("<h1>**********************************************</h1>");

