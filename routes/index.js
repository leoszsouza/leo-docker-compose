var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
require('marko/node-require').install()// Habilita o uso do template Marko
require('marko/express')
let Car = require('../models/Car')
var indexTemplate = require('../views/index.marko')


// Busca a página e carrega os livros
router.get('/', (req, res) => {
    console.log("Exibindo a Home!")
    if(mongoose.connection.readyState){
        Car.find({}).then((cars) => {
            res.marko(indexTemplate, {cars: cars})
        })
    }else{
        res.marko(indexTemplate)
    }
})


// Seed nos arquivos
router.get('/seed', (req,res) => {
    let cars = [
        new Car({
            name: "Fusca", 
            model: "1970", 
            color: "black", 
        }),
        new Car({
            name: "Chevette", 
            model: "1980", 
            color: "white", 
        }),
        new Car({
            name: "Ford Ka", 
            model: "2000", 
            color: "yellow", 
        })
    ]
                    
         
    Car.insertMany(cars).then(moogoseDocuments => {
        console.log(moogoseDocuments, "Inseridos com sucesso")
    }).catch(err => {
        console.log(err)
    })  
    res.send("Carros salvos");
    
})

module.exports = router;