const joi = require('joi');


const name= joi.string()
const model = joi.number().max(2023)
const cc = joi.number().max(3600)
const state = joi.string().max(10)
const transmission = joi.string()
const type= joi.string()
const marcas_id = joi.number()
const page= joi.number().min(0)
const size= joi.number().min(0)

const CreateModel = joi.object({
    name: name.required(), 
    model: model.required(), 
    cc: cc.required(),
    state: state.required(),
    transmission: transmission.required(),
    type: type.required(), 
    marcas_id: marcas_id
})


const UpdateModel = joi.object({
    name: name.required(), 
    model: model.required(), 
    cc: cc.required(),
    state: state.required(),
    transmission: transmission.required(),
    type: type.required(),
    marcas_id: marcas_id, 
})

const GetModels = joi.object({
    page: page, 
    size: size
})


module.exports = {CreateModel, UpdateModel, GetModels }