const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const nameInput = document.getElementById('name-input')
const colorsInput = document.getElementById('color-input')
const imageInput = document.getElementById('image-input')
const prodSubmit = document.getElementById('product-submit')
const getProds = document.getElementById('get')
const prodDisplay = document.getElementById('display-products')
const message = document.getElementById('confirm-message')
const main = document.getElementsByClassName('main-section')[0]

baseURL = 'http://localhost:4005/api/products'

function searchProducts() {
  axios.get(`${baseURL}?name=${searchInput.value}`)
  .then(res => {
    createCard(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}
function deleteProduct(e) {
  e.target.parentNode.remove()
}

function getProducts() {
  axios.get(`${baseURL}`)
  .then(res => {
    createCard(res.data)})
    .catch(err => {
      console.log(err)
    })
}

function postProduct() {
  axios.post(`${baseURL}` ,{
    name: nameInput.value,
    colors: colorsInput.value,
    imageURL: imageInput.value
  })
  .then(res => {
    message.textContent = "product added!"
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-button')
    deleteBtn.innerHTML = `OK`
    deleteBtn.onclick = (e) => {
      e.target.parentNode.textContent = ''
    }
    message.appendChild(deleteBtn)
    
    
    
    
  })
  .catch(err => [
    console.log(err)
  ])
  
}

function createCard(data) {
  const prodCard = data.forEach(prod => {
    const parent = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const colors = document.createElement('h4')
    const price = document.createElement('p')
    const button = document.createElement('button')
    parent.append(img, name, colors, price, button)
    
    img.classList.add('prod-cards-img')
    parent.classList.add('prod-cards')
    button.classList.add('delete-button')
    
    button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    img.src = `${prod.imageURL}`
    name.textContent = `${prod.name}`
    colors.textContent = `${prod.colors}`
    
    if (prod.price === null) {
      price.textContent = ''
    } else {
      price.textContent = `${prod.price}`
    }
    
    prodDisplay.append(parent)
    button.addEventListener('click', deleteProduct)
    
  })
  createButton()
  return prodCard
}
function createButton() {
  const div = document.createElement('div')
  const button = document.createElement('button')
  button.classList.add('button')
  button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
  button.addEventListener('click', (e) =>{
    e.target.parentNode.remove()
    prodDisplay.textContent = ''
  })
  div.appendChild(button)
  main.appendChild(div)
  div.classList.add('message-align')

  
}

getProds.addEventListener('click', getProducts)
prodSubmit.addEventListener('click', postProduct)
searchBtn.addEventListener('click', searchProducts)
