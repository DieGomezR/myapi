const express = require('express');
const router = express.Router()
const servicesUsers = require('../services/servicesUsers');
const {createUserSchema,updateSchemaUser,getUserSchema} = require('../schema/schemaUsers')
const validatorHandler = require('../middleware/validator.hendler')

router.get('/', async (req,res,next) =>{
  try {
    const getUsers =  await servicesUsers.getAllUsers(req,res)
  return res.send({getUsers})
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validatorHandler(getUserSchema, 'params'),
  async (req,res,next) =>{
  try {
  const {id} = req.params
  const oneUser = await servicesUsers.getOneUsers(id)
  return res.json(oneUser)
  } catch (error) {
    next(error)
  }
})

router.post('/', validatorHandler(createUserSchema, 'body'),
  async(req,res,next) =>{
  try {
    const body = req.body
    const newUser = await servicesUsers.createUser(body)
    return newUser  
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', validatorHandler(updateSchemaUser, 'params'),
  async(req,res,next)=>{
  try {
    const {id} = req.params
  const body = req.body
  const updateUser = await servicesUsers.updateUser({id,body})
  return res.json(updateUser)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async(req,res,next)=>{
  try {
    const {id} = req.params
    const deleteUser = await servicesUsers.deleteUser({id})
    return res.json(deleteUser)
  } catch (error) {
    next(error)
  }
})

module.exports = router;