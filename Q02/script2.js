let x = parseInt(prompt("Digite um número "))
soma = 0
n = 1
while(n <= x){
    soma = soma + n
    n = n + 1
}
document.write(`A soma dos primeiros números é ${soma}`)