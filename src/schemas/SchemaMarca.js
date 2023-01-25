const joi = require('joi');


const name= joi.string()
const company = joi.string()
const foundation = joi.number().max(2023)

const CreateMarca = joi.object({
    name: name.required(), 
    company: company.required(), 
    foundation: foundation.required()
})


const UpdateMarca = joi.object({
    name: name.required(), 
    company: company.required(), 
    foundation: foundation.required()
})



module.exports = {CreateMarca, UpdateMarca }