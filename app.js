const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "Capturem.jpg" },
  { name: "Voluptatem", image: "Capturem.jpg" },
  { name: "Explicabo", image: "Capturem.jpg" },
  { name: "Rchitecto", image: "Capturem.jpg" },
  { name: " Beatae", image: "Capturem.jpg" },
  { name: " Vitae", image: "Capturem.jpg" },
  { name: "Inventore", image: "Capturem.jpg" },
  { name: "Veritatis", image: "Capturem.jpg" },
  { name: "Accusantium", image: "Capturem.jpg" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }