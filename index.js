
const express = require("express");
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'static/html')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/index.html'));
});

app.get('/ACS',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/ACS.html'));
});

app.get('/GFP',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/GFP.html'));
});

app.get('/IMP',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/IMP.html'));
});

app.get('/PLAY',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/PLAY.html'));
});

app.get('/PIADAS',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/PIADAS.html'));
});


app.listen(port,()=>{
    console.log("Servidor rodando");
})
