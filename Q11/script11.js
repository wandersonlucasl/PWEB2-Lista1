let x1 = Number(prompt("Digite um número"))
let x2 = Number(prompt("Digite um número"))
let x3 = Number(prompt("Digite um número"))
if (x1 > x2 && x2 > x3){
    n1 = x1
    n2 = x2
}
else if (x1 > x3 && x3 > x2){
    n1 = x1
    n2 = x3
}
else if (x2 > x1 && x1 > x3){
    n1 = x2
    n2 = x1
}
else if (x2 > x3 && x3 > x1){
    n1 = x2
    n2 = x3
}
else if (x3 > x1 && x1 > x2){
    n1 = x3
    n2 = x1 
}
else {
    n1 = x3
    n2 = x2
}
n3 = n1 + n2
document.write(`A soma entre ${n1} e ${n2} é igual a ${n3}`)