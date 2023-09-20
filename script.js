const lampada = document.getElementById("lampada-01");
const lampada2 = document.getElementById("lampada-02")

function trocar() {
    if (lampada.src.includes("lampada-on.jpg")) {
      lampada.src = "imagens/lampada.jpg";
    } else {
      lampada.src = "imagens/lampada-on.jpg";
    }
  }

  lampada2.addEventListener("mouseover", function () {
    lampada2.src = "imagens/lampada-on.jpg";
  });

  lampada2.addEventListener('mouseout', function () {
    lampada2.src = "imagens/lampada.jpg";
  })
  
  
  
  