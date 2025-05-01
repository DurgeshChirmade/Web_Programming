//1
let size = prompt("Enter the size  : ")
var arr = [];
for (let i = 0; i < size; i++) {
    var num = prompt("Enter your number : ")
    arr.push(parseInt(num));
}
document.writeln("<h1>**************************</h1>");
for (i = 0; i < arr.length; i++)
    document.writeln("<h1>" + arr[i] + "</h1>");
document.writeln("<h1>**************************</h1>");

for (i in arr) {
    document.writeln("<h1>" + arr[i] + "</h1>");
}
document.writeln("<h1>**************************</h1>");

//2
var num = parseInt(prompt("Enter number for search : "));
if ((arr.indexOf(num)) >= 0) {
    document.writeln("<h1>" + num + " is found at " + arr.indexOf(num) + " position.</h1>");
}
else {
    document.writeln("<h1>" + num + " is not found at any position.</h1>");
}

document.writeln("<h1>************Sort functions**************</h1>");

//3
function compareFn(a, b) {
    return a - b;
}
arr.sort(compareFn);
document.writeln("<h1> Function sort: " + arr.toString() + "</h1>");

document.writeln("<h1>**************************</h1>");

arr.sort(function (a, b) {
    console.log(a, b);
    return a - b;
});
document.writeln("<h1> Anonymous Function : " + arr.toString() + "</h1>");

document.writeln("<h1>**************************</h1>");

arr.sort((a, b) => { return a - b });
document.writeln("<h1> Arrow Function : " + arr.toString() + "</h1>");
document.writeln("<h1>**************************</h1>");
arr.sort((a, b) => a - b);
document.writeln("<h1> Arrow Function : " + arr.toString() + "</h1>");
document.writeln("<h1>************Bulleted List**************</h1>");
//4
function myiter(v, i, a) {
    document.writeln("<li> " + v + " present at " + i + "</li>");
}
document.writeln("<ul>");
arr.forEach(myiter);
document.writeln("</ul>");

document.writeln("<h1>**************************</h1>");

document.writeln("<ul>");
arr.forEach(function (v, i, a) {
    document.writeln("<li> " + v + " present at " + i + "</li>");
});
document.writeln("</ul>");

document.writeln("<h1>**************************</h1>");

document.writeln("<ul>");
arr.forEach((v, i, a) =>
    document.writeln("<li> " + v + " present at " + i + "</li>")
)
document.writeln("</ul>");

document.writeln("<h1>**************************</h1>");

//5
var sum = arr.reduce((s, v) => s + v);
document.writeln("Sum : " + sum);

document.writeln("<h1>**************************</h1>");

var avg = arr.reduce((sum, val) => sum + val) / arr.length;
document.writeln("Avg : " + avg);

document.writeln("<h1>**************************</h1>");

var max = arr.reduce((s, v) => v > s ? v : s);
document.writeln("Max : " + max);

document.writeln("<h1>**************************</h1>");

var min = arr.reduce((s, v) => v < s ? v : s);
document.writeln("Min : " + min);

document.writeln("<h1>**************************</h1>");

//6
var even = arr.every(v => v % 2 == 0);
document.writeln("Even number : ", even);

document.writeln("<h1>**************************</h1>");

//7
var odd = arr.every(v => v % 2 == 1);
document.writeln("Odd number : ", odd);

document.writeln("<h1>**************************</h1>");

//8
const isPrime = n => {
    if (n <= 1)
        return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
const allPrime = arr.every(v => isPrime(v));
document.writeln("All Prime Numbers: " + allPrime);
document.writeln("<h1>**************************</h1>");

let evenArr = arr.filter(v => v % 2 === 0);
let oddArr = arr.filter(v => v % 2 !== 0);

document.writeln("Even Numbers: " + evenArr + "<br>");
document.writeln("Odd Numbers: " + oddArr + "<br>");