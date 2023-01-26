const { Router } = require('express');
const routers= Router();

const ServiceMarcas= require('../services/ServicesMarcas')
const validatorHandler= require('../middlewares/ValidatorHandler')

const { UpdateMarca, CreateMarca }= require('../schemas/SchemaMarca')
const service= new ServiceMarcas(); 

routers.get('', async(req, res, next) =>{
    try {
        const list_marc = await service.listarMarca(); 
        res.json(list_marc);
    } catch (error) {
        res.json(error.message)
    }
})

routers.post('/create', 
    validatorHandler(CreateMarca, 'body'), 
    async (req, res)=>{
        try {
            console.log(req.body)
            const new_marca = await service.CreateMarca(req.body)
            res.json(new_marca)
        } catch (error) {
            res.json(error.message)
        }
})

routers.get('/:id', async(req, res, next) =>{
    try {
        const marca= await service.getOneMarca(req.params.id)
        res.json(marca)
    } catch (error) {
        next(error)
    }

})

routers.put('/update/:id', 
    validatorHandler(UpdateMarca, 'body'), 
    async(req, res, next)=>{
        try {
            const marca = await service.updateMarca(req.params.id, req.body)
            res.json({"message": "update successfully", "marcas": marca})
        } catch (error) {
            next(error)
        }
})

routers.delete('/delete/:id', async(req, res, next) =>{
    try {
        const del = await service.deleteMarca(req.params.id)
        res.json(del)
    } catch (error) {
        next(error)
    }
    

})

routers.get('/:id/models', async(req, res, next) =>{
    try {
        const models = await service.getmodels(req.params.id, req.query)
        res.json(models)
    } catch (error) {
        next(error)
    }
})


module.exports = routers; 