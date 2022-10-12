let num = Number(prompt("Digite um número "))
cont = 0
for(i = 1; i <= num; i++){
    if (num % i == 0){
        cont++
    }
}
if(cont == 2){
    document.write(`O número ${num} é primo`)
}
else{
    document.write(`O número ${num} não é primo`)
}