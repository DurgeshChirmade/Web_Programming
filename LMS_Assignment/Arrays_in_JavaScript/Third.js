document.writeln("<br/><h1>***********************Array Destructuring***********************</h1><br/>");

let arr = [3, 5, 7, 9, 11];
const [a, b, c, d, e] = arr;
document.writeln("<h1>" + "Individual element : " + a + "," + b + "," + c + "," + d + "," + e + "</h1>");
document.writeln("<h1>**********************************************</h1>");

const [p, , q, ...rest] = arr;
document.writeln("<h1>" + "First & Third element : " + p + "," + q + "," + "<br/>" + rest + "</h1>");
document.writeln("<h1>**********************************************</h1>");

/*
const arr1 = [3, 5, 7, 9, 11];
let [first, ...mid, last] = arr1;
document.writeln("<h1>" + "First & Last element : " + first + "," + last + "," + "<br/>" + mid + "</h1>");
document.writeln("<h1>**********************************************</h1>");
*/
