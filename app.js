const express = require('express');
const app = express();
const port = 80;
const hostname = '127.0.0.1';
const fs = require('fs');
const path = require('path')

const viewPath = path.join(__dirname, 'views')

app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', viewPath)

app.get('/', (req, res)=>{
    res.render('index', {
        title: "Mens In Unique",
        content: "Mens Essentials and More...",
        head: "Mens In Unique"
    })
})

app.post('/', (req, res)=>{
    res.render('index', {
        title: "Mens In Unique",
        content: "Submitted Successfully",
        head: "Mens In Unique"
    })

    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let text = req.body.text;

    console.log(`Myself ${name}. I'm ${age} year old. I'm an alpha ${gender}. My concern is "${text}"`)

    // let outputText = `Myself ${name}. I'm ${age} year old. I'm an alpha ${gender}. My concern is "${text}"`;
    let outputText = `Name: ${name}, Age: ${age}, Gender: ${gender}, Text: ${text}`

    fs.writeFileSync('output.txt', outputText)
})

app.listen(port, hostname, ()=>{
    console.log(`Listening at http://${hostname}:${port}`)
})