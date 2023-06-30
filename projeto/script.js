function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/gato_rajado.jpg")
  } else {
    img.setAttribute("src", "./assets/gato_preto.jpg")
  }
}
