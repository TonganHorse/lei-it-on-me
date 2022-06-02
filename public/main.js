

  const shopBtn = document.getElementById('shop-button')
  const searchInput = document.getElementById('search-input')
  const searchBtn = document.getElementById('search-button')
  const getProdSec = document.getElementById('get-products-section')
  const images = document.getElementsByClassName('image')
  const nameInput = document.getElementById('name-input')
  const colorsInput = document.getElementById('color-input')
  const imageInput = document.getElementById('image-input')
  const prodSubmit = document.getElementById('product-submit')
  const baseURL = 'http://localhost:4005/api/products'
  
  function getProducts() {
    axios.get(`${baseURL}`)
    .then(res => {
      const prodCard = res.data.forEach(prod => {
        const prodContainer = document.createElement('div')
        const img = document.createElement('img')
        const title = document.createElement('h3')
        prodContainer.classList.add('slide')
        title.classList.add('product-titles')
        img.classList.add('image')
        img.src = `${prod.imageURL}`
        
        title.textContent = `${prod.colors}${prod.name}`
        prodContainer.append(img, title)
        getProdSec.append(prodContainer)
      })
      return prodCard
    })
    .catch(err => {
      console.log(err)
    })
  }
  function searchProducts() {
    axios.get(`${baseURL}?name=${searchInput.value}`)
    .then(res => {
       console.log(res.data)
     })
     .catch(err => {
       console.log(err)
     })
 }
 

  shopBtn.addEventListener('click', getProducts, {once: true})
  searchBtn.addEventListener('click', searchProducts)

