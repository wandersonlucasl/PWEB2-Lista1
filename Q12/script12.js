let x3 = Number(prompt("Digite um número"))
n1 = 1
n2 = 1
document.write("1 <br/>")
if(x3 == 1 || x3 == 2){
    document.write("1")
}
else{
    document.write("1 <br/>")
    cont = 3
    while(cont <= x3){
        termo = n1 + n2
        n2 = n1
        n1 = termo
        cont +=1
        document.write(termo + "<br/>")
    }
}