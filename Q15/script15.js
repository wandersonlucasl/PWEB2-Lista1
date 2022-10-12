let x1 = Number(prompt("Digite um número"))
div = x1
while(div != 0){
    if(x1 % div == 0){
        document.write(div + `<br/>`)
    }
    div = div - 1
}