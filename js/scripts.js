function calcularPreco() {
    const auxValor = document.getElementById("preco15");
    
    const preco15Minutos = auxValor.value;

    const auxTempoUso = document.getElementById("tempouso");

    const TempoUso = auxTempoUso.value;

    const valorMultiplicar = TempoUso / 15;

    const valorAPagar = parseInt(preco15Minutos) * valorMultiplicar;

    if (TempoUso % 15 == 0)
    {
        document.getElementById("valorPagar").innerHTML = "Valor a pagar (R$): " + valorAPagar;
    }

    /* Não consegui fazer funcionar.
    else if (TempoUso % 15 == 1)
    {
        valorMultiplicar++;
        valorAPagar = parseInt(preco15Minutos) * valorMultiplicar;
        document.getElementById("valorPagar").innerHTML = "Valor a pagar (R$): " + valorAPagar;
    }
    */
}