function jogar(){
    idade = prompt("Qual sua idade?");
    if(idade < 18){
        alert("você é menor de idade, não pode jogar");
    }else if (idade >= 18) {
        alert("você tem idade para jogar. Vamos lá!!");

        playerHitChance =prompt("Escolha entre 1 e 3");  
        thomasHitChance = Math.floor(Math.random() * 3) + 1; // Valor aleatório entre 1 e 3

        if (playerHitChance > 1 && thomasHitChance <= 1) {
          document.getElementById("result").innerHTML = "Você acertou Thomas Shelby e ele errou. Você venceu!";
            alert("Você acertou Thomas shelby e ele errou. Você venceu!");
          } else if ( thomasHitChance > 2 && playerHitChance <= 1) {
            document.getElementById("result").innerHTML = "Você atirou e errou! Thomas Shelby atirou e acertou. Você perdeu!";
            alert("Você atirou e errou! Thomas Shelby atirou e acertou. Você perdeu!");
          } else if (thomasHitChance > 1 && playerHitChance > 1){
            document.getElementById("result").innerHTML = "Ambos atiraram e acertaram! Empate!" ;
            alert("Ambos atiraram e acertaram! Empate!");
          } else {
            document.getElementById("result").innerHTML = "Ninguém acertou, tente novamente!";
            alert("Ninguém acertou, tente novamente!");
        }
    }
  
  
}
  





