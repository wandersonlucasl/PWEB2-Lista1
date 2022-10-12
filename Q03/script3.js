let x1 = parseInt(prompt("Digite um número "))
let x2 = parseInt(prompt("Digite outro número "))
i = 0
x = 1
while(i < x2){
    i = i + 1
    x = x * x1
}
document.write(`${x1} elavado a ${x2} é ${x}`)