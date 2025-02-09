// Botones interactivos
document.getElementById("startNow").addEventListener("click", () => {
    alert("¡Bienvenido! Estás listo para comenzar tu proyecto.");
  });
  
  document.getElementById("learnMore").addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  });
  