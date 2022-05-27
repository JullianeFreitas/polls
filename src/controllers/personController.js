const  postPerson = require('../service/personService')
const  getAll = require('../service/personService')
const { validationResult } = require('express-validator');

exports.post = (req, res, next) => {
     // Finds the validation errors in this request and wraps them in an object with handy functions
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

    postPerson(req, res)
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.getAll = (req, res, next) => {
    getAll(res)
};
