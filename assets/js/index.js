const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("active");
    navmenu.classList.toggle("active");
})

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../html/sigin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../html/sigup.html";
  }