let x1 = Number(prompt("Digite a nota 1 "))
let x2 = Number(prompt("Digite a nota 2 "))
let x3 = Number(prompt("Digite a nota 3 "))
let x4 = Number(prompt("Digite a nota 4 "))
let x5 = Number(prompt("Digite a nota 5 "))

if ((x1 && x2 >= 70) && (x3 && x4 >= 70) && (x5 >= 70)){
    document.write(`${x1}, ${x2}, ${x3}, ${x4}, ${x5} <br/>`)
    document.write("Classificação A")
}
else if ((x1 && x2 >= 70) && (x4 >= 70) && (x3 < 70)){
    document.write(`${x1}, ${x2}, ${x3}, ${x4}, ${x5} <br/>`)
    document.write("Classificação B")
}
else if ((x1 && x2 >= 70)  && (x5 < 70)){
    document.write(`${x1}, ${x2}, ${x3}, ${x4}, ${x5} <br/>`)
    document.write("Classificação C")
}
else{
    document.write(`${x1}, ${x2}, ${x3}, ${x4}, ${x5} <br/>`)
    document.write("Reprovado")
}