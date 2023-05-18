const Joi = require('joi');

const id = Joi.number()
const email = Joi.string().email()
const password = Joi.string().min(10)
const createdTime = Joi.date()
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    createdTime: createdTime,
    role: role
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