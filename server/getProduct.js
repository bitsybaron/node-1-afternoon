const product = require('../products.json');

const getProduct = (req, res) => {
    let findProduct = product.find((e) => e.id === parseInt(req.params.id))
    if (!findProduct) {
        return res.status(500).send('Item not in list')
    }
    return res.status(200).send(findProduct)
}

module.exports = getProduct;