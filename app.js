let contaAgua
let contaLuz
let contaInternet
let aluguel
let funcionarios
let custoTotal



contaLuz = parseInt ( prompt("informe o valor da conta de luz"))
contaAgua = parseInt( prompt("informe o valor da conta de agua"))
contaInternet = parseInt (prompt("informe o valor da conta de internet"))
aluguel = parseInt( prompt("informe o valor do aluguel"))
funcionarios = parseInt( prompt("informe o custo com os funcionarios"))

custoTotal = contaLuz + contaAgua + contaInternet + aluguel + funcionarios

alert("O CUSTO TOTAL É R$" + custoTotal)