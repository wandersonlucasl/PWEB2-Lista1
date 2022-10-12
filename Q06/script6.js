let x1 = parseInt(prompt("Digite o 1° número "))
let x2 = parseInt(prompt("Digite o 2° número "))
let x3 = parseInt(prompt("Digite o 3° número "))
if (x1 < x2 && x2 < x3){
    document.write(`A ordem crescente é ${x1} ${x2} ${x3}`)
}
else if (x1 < x3 && x3 < x2){
    document.write(`A ordem crescente é ${x1} ${x3} ${x2}`)
}
else if (x2 < x1 && x1 < x3){
    document.write(`A ordem crescente é ${x2} ${x1} ${x3}`)
}
else if (x2 < x3 && x3 < x1){
    document.write(`A ordem crescente é ${x2} ${x3} ${x1}`)
}
else if (x3 < x1 && x1 < x2){
    document.write(`A ordem crescente é ${x3} ${x1} ${x2}`) 
}
else {
    document.write(`A ordem crescente é ${x3} ${x2} ${x1}`) 
}