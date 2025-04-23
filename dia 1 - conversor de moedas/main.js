function conversor() {
    var inputEuros = document.getElementById("inputEuros").value;
    var eurosToRealRate = 6.17; // Este é um valor fixo, você pode querer atualizá-lo a partir de uma API de taxa de câmbio ao vivo.
    var outputReais = inputEuros * eurosToRealRate;
    
    // Formata o número para ter duas casas decimais e usa o ponto como separador decimal
    outputReais = outputReais.toFixed(2).replace("." , ",");
    
    document.getElementById("outputReais").innerHTML = "R$" + outputReais; 
}
