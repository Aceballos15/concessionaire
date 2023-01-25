const models = require('../models/modelos');
const  boom = require('@hapi/boom');

class ServiceModels {
    constructor() {}

    async CreateModel(model){
        const mod= await models.create(model)
        if(model){
            return model
        }else{
            throw boom.notFound('Model not created')
        }
    }

    async GetModel( query ){
        const { page= 0 , size= 1 } = query 
        const options = {
            limit: +size, 
            offset: (+page) * (+size)
        }
        console.log(options)
        const { count, rows } = await models.findAndCountAll(options)

        if(!rows){
            throw boom.notFound('Modelos not found')
        }else{
            return {
                "contador": count, 
                "modelos": rows
            }
        }
    }

    async GetOneModel(id){
        const model = await models.findOne({where: {id}})
        if(!model){
            throw boom.notFound('Model not found')
        }
        return model; 
    }   
    
    async UpdateModel(id, data){
        const model = await models.findOne({where: {id}})
        if(!model){
            throw boom.notFound('Model not found')
        }else{
            model.set(data)
            await model.save()
        }
        return model
    }

    async DeleteModel(id){
        const deleted= await models.findOne({where: {id}})
        if(!deleted){
            throw boom.notFound('Model not found')
        }else{
            const del = await models.destroy({where: {id}})
        }
        return {"message": "Model deleted successfully"}
    }

}


module.exports = ServiceModels