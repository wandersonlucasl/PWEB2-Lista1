let x = parseInt(prompt("Digite um número "))
i = 1
fatorial = 1
while(i <= x){
    fatorial = fatorial * i
    i = i + 1
}
document.write(`${x} fatorial é igual a ${fatorial}`)