let x1 = parseInt(prompt("Digite um número "))
let x2 = parseInt(prompt("Digite outro número "))
mdc = x1
while(x1 % mdc != 0 || x2 % mdc != 0){
    mdc = mdc - 1
}
document.write(mdc)