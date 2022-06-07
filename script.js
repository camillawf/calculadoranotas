function calcularNota() {
    var quantAulas = parseFloat(totalAulas.value)
    var faltas = parseFloat(quantFaltas.value)
    var media = (parseFloat(nota1.value) + parseFloat(nota2.value)) / 2
    var frenquencia = (parseFloat (quantAulas-quantFaltas)/100)

    if ((media >= 7) and (frenquencia>75)) {
        resultado.value = "Aprovado"
    } else if (frequencia>75 && media < 7) {
        resultado.value = "exame"
    } else {
        resultado.value = "Reprovado"
    }
}
