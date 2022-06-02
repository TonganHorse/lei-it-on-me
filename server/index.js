const express = require('express')

const app = express()
const path = require('path')
const {getProducts, postProduct} = require('./controller')


app.use(express.json())

app.use('/', express.static(path.join(__dirname, "../public")))

app.get('/api/products', getProducts)
app.post('/api/products', postProduct)


port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})