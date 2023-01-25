const marcas = require('../models/marcas');
const models = require('../models/modelos');

const  boom = require('@hapi/boom');

class ServiceMarcas {
    constructor() {}

    async Create(data) {
        const new_marca = await marcas.create(data)
        return new_marca; 
    }
    
    async listar(){
        const list= await marcas.findAll();
        if(!list){
            throw boom.notFound('Marcas not found');
        }
        return  list;
    }
    async update(id, data){
        const marca= await marcas.findOne({where:{id}})
        if (!marca){
            throw boom.notFound('Marcas not found');
        }else{
            marca.set(data)
            await marca.save()
        }
        return marca;
    }

    async delete(id){
        const marca= await marcas.findOne({where:{id}}); 
        if (!marca){
            throw boom.notFound('Marca does not exist');
        }else{
            const deleted= marca.destroy({where:{id}})
            return {message: "Delete successfully"}
        }

    }
    async getOne(id){
        const marca= await marcas.findOne({ where: {id}});
       if(!marca){
             throw boom.notFound('Marcas not found');
       }
       return marca;
    }

    async getmodels(id, query){
        const { page , size } = query 
        const limit = size; 
        const offset = page * limit

        const rows = await models.findAndCountAll({where: {marcas_id: id}, offset: offset, limit: limit})
        if(!rows){
            throw boom.notFound('models not found')
        }else{
            return {
                "models": rows,
            }
        }

    }
}


module.exports = ServiceMarcas