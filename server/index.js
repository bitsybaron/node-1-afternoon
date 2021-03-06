const express = require('express');
const getProducts = require('./getProducts.js')
const getProduct = require('./getProduct.js')

const app = express();

app.get('/api/products/', getProducts);
app.get('/api/product/:id', getProduct);

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});