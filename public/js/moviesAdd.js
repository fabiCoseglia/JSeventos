window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", function () {
    titulo.style.color = "red";
  });
  titulo.addEventListener("mouseout", function () {
    titulo.style.color = "black";
  });

  let campoTitulo = document.getElementById("titulo");
  let estadoSecreto = 0;

  const checkKey = (key) => {
    switch (true) {
      case key === "s" && estadoSecreto === 0:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "e" && estadoSecreto === 1:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "c" && estadoSecreto === 2:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "r" && estadoSecreto === 3:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "e" && estadoSecreto === 4:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "t" && estadoSecreto === 5:
        ++estadoSecreto;
        console.log(estadoSecreto);
        break;
      case key === "o" && estadoSecreto === 6:
        ++estadoSecreto;
        alert("SECRETO MAGICO");
        console.log(estadoSecreto);
        break;

      default:
        estadoSecreto = 0;
        console.log(estadoSecreto);
        break;
    }
  };

  campoTitulo.addEventListener("keyup", function (e) {
    checkKey(e.key);
  });
};
