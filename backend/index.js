const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(cors());

app.use('/serviceCards/imgs', express.static('./serviceCards/imgs'));
app.use('/productCards/imgs', express.static('./productCards/imgs'));

app.get('/', (req, res)=>{
    res.send('OK');
});

app.get('/api/apiKeys', (req,res) => {
    const apiKeys = {
        PUBLIC_KEY: process.env.PUBLIC_KEY,
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID
    }
    res.send(apiKeys);
})

app.get('/api/products', (req,res) => {
    const products = require('./productCards/productCards.json');
    res.send(products);
})

app.get('/api/service', (req,res) => {
    const products = require('./productCards/productCards.json');
    res.send(products);
})

app.listen(4000,() => {
    console.log('Server is running on port 4000')
});