const { Router } = require('express');
const routers= Router();

const ServiceModels= require('../services/ServicesModels')
const validatorHandler= require('../middlewares/ValidatorHandler');
const { UpdateModel, CreateModel } = require('../schemas/SchemaModel');

const service= new ServiceModels(); 

routers.get('/', async (req, res, next) => {
    try {
        const models = await service.GetModel( req.query )
        res.json(models)
    } catch (error) {
        next(error)
    }
})

routers.post('/create', 
validatorHandler(CreateModel, 'body'),
    async (req, res, next) => {
        try {
            const model = await service.CreateModel(req.body)
            res.json(model)
        } catch (error) {
            next(error)
        }
})
    
routers.put('/update/:id', async (req, res, next) => {
    try {
        console.log(req.params.id)
        const model = await service.UpdateModel(req.params.id, req.body)
        res.json(model)
    } catch (error) {
        next(error)
    }
}) 

routers.delete('/delete/:id', async (req, res, next) => {
    try {
        const deleted= await service.DeleteModel(req.params.id)
        res.json(deleted)
    } catch (error) {
        next(error)
    }
}) 

routers.get('/:id', async (req, res, next) => {
    try {
        const model = await service.GetOneModel(req.params.id)
        res.json(model)
    } catch (error) {
        next(error)
    }
}) 
module.exports = routers; 