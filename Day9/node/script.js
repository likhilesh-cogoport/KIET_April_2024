const express = require('express')

const app = express()

app.get('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome GET</h1>');
})

app.put('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome GET</h1>');
})


app.patch('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome GET</h1>');
})

app.delete('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome GET</h1>');
})


app.listen(1400)