const Joi = require('joi');

const id = Joi.number()
const email = Joi.string().email()
const password = Joi.string().min(10)
const createdTime = Joi.date()

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    createdTime: createdTime.required()
})

const updateSchemaUser = Joi.object({
    email: email
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateSchemaUser,
    getUserSchema
}