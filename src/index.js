const baseUrl = 'https://platzi-avo.vercel.app'
const url = `${baseUrl}/api/avo`
const appNode = document.querySelector('#app')
appNode.className = 'grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mt-4'

appNode.addEventListener('click', (event) => {
  if (event.target.nodeName === 'H2') {
    window.alert('Hola')
  }
})

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return newPrice
}

window.fetch(url)
  .then(res => res.json())
  .then(res => {
    const allItems = []	

    res.data.forEach(item => {
      // Crear imagen
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;
      image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

      // Crear título
      const title = document.createElement("h2");
      title.className = "text-lg font-semibold"
      title.textContent = item.name;

      // Crear precio
      const price = document.createElement("div");
      price.className = "text-gray-600 font-light"
      price.textContent = formatPrice(item.price);

      // Creamos un contenedor el título y el precio
      const priceAndTitle = document.createElement("div")
      priceAndTitle.className = "text-center md:text-left";
      priceAndTitle.appendChild(title);
      priceAndTitle.appendChild(price);

      // Metemos todo dentro de una tarjeta contenedora
      const card = document.createElement("div");
      card.className = "md:flex w-80 bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(image, priceAndTitle);
      card.style = 'cursor: pointer'

      // Metemos todo dentro del contenedor principal
      const container = document.createElement("div");
      container.appendChild(card);

      allItems.push(container);
    })

    appNode.append(...allItems)
  })
