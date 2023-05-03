const express = require('express')
const productsServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHandler = require ('../middleware/validator.hendler')
const {schemaProductCreate, updateSechamProduct, getProductSchema} = require('../schema/schemaProducts')

router.get('/', async (req,res,next) =>{
   try {
      const products = await productsServices.getAllProducts(req,res)
    res.json(products)
   } catch (error) {
      next(error)
   }
})

router.get('/:id',validatorHandler(getProductSchema, 'params'),
   (req,res)=> {
   const createProduct =  productsServices.getOneProduct(req,res)
   return createProduct
    })


    router.post('/', validatorHandler(schemaProductCreate, 'body'),
    async(req,res)=>{
   const newProduct = await productsServices.createNewProducts(req,res)
   return newProduct
    })

    router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateSechamProduct, 'body'),
    (req,res)=>{    
    const updateProducts =  productsServices.updateProducts(req,res)
    res.json(updateProducts)
    })


    router.delete('/:id', async(req,res)=>{
    const deleteProduct = await productsServices.deleteProducts(req,res)
    return deleteProduct
    })
    module.exports = router;