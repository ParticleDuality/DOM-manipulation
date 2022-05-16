const baseUrl = 'https://platzi-avo.vercel.app'
const url = `${baseUrl}/api/avo`
const appNode = document.querySelector('#app')

window.fetch(url)
  .then(res => res.json())
  .then(res => {
    const allItems = []	

    res.data.forEach(element => {
      const image = document.createElement('img')
      const title = document.createElement('h2')
      const price = document.createElement('div')
      const container = document.createElement('div')

      title.textContent = element.name
      price.textContent = element.price
      image.src = `${baseUrl}${element.image}`

      container.append(image, title, price)

      allItems.push(container)
    })

    appNode.append(...allItems)
  })
