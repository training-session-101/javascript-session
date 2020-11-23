const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const hashTable = {};
const dir = 'temp';

app.post('/memory/:key', (req, res ) => {
    console.log('req', req.body);
    hashTable[req.params.key] = req.body.value;
    res.send();
});

app.get('/memory/:key', (req, res ) => {
    const key = req.params.key;
    if(key in hashTable){
        return res.send(hashTable[key]);
    }
    return res.send(null);
});

app.post('/disk/:key', (req, res ) => {
    const key = req.params.key;
    fs.writeFileSync(`${dir}/${key}`, req.body.value);
    res.send();
});

app.get('/disk/:key', (req, res ) => {
    const key = req.params.key;
    const data = fs.readFileSync(`${dir}/${key}`);
    if(data){
        res.send(data);
    }
    res.send(null);
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});