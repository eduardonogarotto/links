function toggleMode() {
  //Pegar a TAG HTML
  const html = document.documentElement

  //Pegar a TAG IMG
  const img = document.querySelector("#profile img")

  /*
-------------------------------------------------------
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 
-------------------------------------------------------
  A função Toggle é semelhante ao bloco de código acima, onde ela verifica se existe a classe Light no objeto HTML e faz a adição ou remoção da classe conforme a ação de clique. */
  html.classList.toggle("light")

  /* Verificando se existe a classe Light no objeto HTML. Se existir, exibe a imagem de perfil e o texto alternativo para a opção de Light-mode; senão exibe a imagem de perfil e o texto alternativo para a opção de Dark-mode*/
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Eduardo Nogarotto sorrindo, usando óculos de sol, e com fundo claro"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Eduardo Nogarotto sorrindo, usando óculos de grau, e com fundo escuro"
    )
  }
}
