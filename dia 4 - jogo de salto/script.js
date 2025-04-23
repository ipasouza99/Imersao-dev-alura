function jogar(){
    let playerChoice;
  
  while (true) {
    playerChoice = parseInt(prompt("Escolha um vidro entre 1, 2 ou 3:"));
    
    if (playerChoice >= 1 && playerChoice <= 3) break;
    else alert("Opção inválida! Por favor, escolha um número do vidro entre 1, 2 ou 3.");
    document.getElementById("result").innerHTML = "Opção inválida! Por favor, escolha um número do vidro entre 1, 2 ou 3.";
  }
  
  let computer = Math.floor(Math.random() * 3) + 1; // o computador gerará números aleatorios entre 1 e 3 
  
  if (playerChoice <= computer) {
    alert("Você saltou com sucesso! Você venceu!");
    document.getElementById("result").innerHTML = "Você saltou com sucesso! Você venceu!";
  } else {
    alert("Oh, não! O vidro quebrou e você caiu! Você perdeu!");
    document.getElementById("result").innerHTML ="Oh, não! O vidro quebrou e você caiu! Você perdeu!";
  }
}


