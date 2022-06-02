const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const {getProducts, postProduct} = require('./controller')


app.use(express.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, "../public")))

app.get('/api/products', getProducts)
app.post('/api/products', postProduct)











port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})