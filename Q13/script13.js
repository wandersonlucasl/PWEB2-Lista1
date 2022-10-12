let x1 = Number(prompt("Digite um número"))
n1 = 1
while(n1 * (n1+1) * (n1+2) < x1){
    n1 = n1 + 1
}
if(n1 * (n1+1) * (n1+2) == x1){
    document.write(`O número ${x1} é triangular <br/>`)
    document.write(`${n1} * ${n1+1} * ${n1+2} é igual a ${x1}`)
}
else{
    document.write(`O número ${x1} não é triangular`)
}