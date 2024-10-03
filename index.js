const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const { emitWarning } = require('process')

const basePath = path.join(__dirname)

app.get('/users/add', (req, res) => {
    const add = req.params.id // consultar no banco de dados o ID
    console.log(`estamos buscando pelo usuario : ${add}`)
    res.sendFile(`${basePath}/form.html`)// mandar um arquivo para "basepath" que busca o arquvo principal
})
app.post('/users/save', (req,res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    console.log(name)
    console.log(email)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})

app.use(express.json())

app.use(express.static('public'))