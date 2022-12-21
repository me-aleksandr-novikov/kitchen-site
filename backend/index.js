const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

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

app.listen(4000,() => {
    console.log('Server is running on port 4000')
});