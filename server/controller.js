
const productArray = require('./db.json')

let globalid = 6


module.exports = {
    getProducts: (req, res) => {
        if(req.query.name) {
            const filtered = productArray.filter(lei => {
                return lei.colors.toLowerCase().includes(req.query.name.toLowerCase())
            }) 
            res.status(200).send(filtered)
        } else{
            res.status(200).send(productArray)
        }

    },
    postProduct: (req, res) => {
        console.log(req.body)
        let {name, imageURL, colors} = req.body

        let newProd = {
            id: globalid,
            name,
            colors,
            imageURL,
            price: null
        }

        productArray.push(newProd)
        res.sendStatus(200)
        globalid++

        console.log(productArray)


    }
    
}