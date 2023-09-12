function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
   // pegar a tag img
   const img = document.querySelector("#profile img")
   
    // Substituir a imagem
    if(html.classList.contains('light')) {
    // Se tiver light mode, add a img light
    img.setAttribute("src", "./assets/sol.jpeg")
   } else {
    // Se tiver sem light mode, manter a img normal
   img.setAttribute("src", "./assets/normal.jpeg")
   }
}