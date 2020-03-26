const porta = 3003

const express = require('express')
const bancodedados = require('./bancodedados')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log('Servidor executando na porta ' + porta)
})