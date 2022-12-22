function math(){
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var num3 = Number(prompt("Enter first number:"));


document.write("<br/> Result " + (num1 + num2 + num3));
document.write("<br/> Result " + ((num3 - num2) - num1));
document.write("<br/> Result  " + (num1 * num2 * num3));
document.write("<br/> Result  " + ((num3/ num2)  /num1));

}
math();