// Criar uma lista com 3 personagem
function jogar(){
personagem = ["","",""];

viloes = ["", "",""];

forcaPersonagem = 0;
forcaViloes = 0;
alert("O array Personagem contem: " + personagem);

for(let i =0; i<3; i++){
 escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
 personagem[i] = escolhaPersonagem;
 // calcular a força de cada personagem e depois somar a força do time. 
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
  // forcaPersonagem += Math.floor(Math.random() * 10) + 1; Maneira mais avançada de fazer a mesma coisa.
}
alert("Agora, o array Personagem contem: " + personagem);
alert("inicio viloes:" + viloes);

for(let i =0; i<3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10 );
    viloesPossiveis =["Azazel","Crowley","Lilith","Ruby","Metratron","Meg","Eve","Baltazar","Chuck","Lúcifer"];
    viloes[i] = viloesPossiveis[indiceAleatorio];
    // Calcular a forca de cada personagem do do time do computador.
    forçaViloes = forcaViloes+= Math.floor(Math.random() * 10) + 1;
}
alert("final viloes:" + viloes);

// Comparar os dois times para contabilizar quem ganhou.
if(forcaPersonagem > forcaViloes){
    alert("Seu time é muito forte, portanto você venceu a disputa de cabo de guerra! Sua força foi " + forcaPersonagem);
    document.getElementById("resultadoFinal").innerHTML = "Seu time é muito forte, portanto você venceu a disputa de cabo de guerra! Sua força foi " + forcaPersonagem;

} else if (forcaPersonagem < forcaViloes){
    alert("Seu time é muito fraco, portanto os vilões ganharam a disputa de cabo de guerra com a força de " + forcaViloes);
    document.getElementById("resultadoFinal").innerHTML = "Seu time é muito fraco, portanto os vilões ganharam a disputa de cabo de guerra com a força de " + forcaViloes;

} else{ 
    alert("Os dois times tem a mesma força! Vocês empataram");
    document.getElementById("resultadoFinal").innerHTML = "Os dois times tem a mesma força! Vocês empataram!  Ambas forças são: " + forcaPersonagem;
}

}
