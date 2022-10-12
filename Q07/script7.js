let x1 = parseInt(prompt("Digite o tamanho da base "))
let x2 = parseInt(prompt("Digite o tamanho da altura "))
area = x1 * x2
perimetro = (2 * x1) + (2 * x2)
document.write(`Base: ${x1} <br/> Altura: ${x2} <br/>`)
document.write(`A área do retângulo é ${area} <br/>`)
document.write(`O perimetro do retângulo é ${perimetro}`)