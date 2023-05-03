const faker = require('faker')
const boom = require('@hapi/boom')

const getAllProducts =  (req,res) =>{
    try {
        const products = []
    const {size} = req.query
    const limit = size || 5
    const {id} = req.params

    for( let index = 0;index<limit;index++){
        products.push({
            'id':id,
            name:faker.commerce.productName(),
            price:parseInt(faker.commerce.price(),10),
            image:faker.image.imageUrl(),
        })
    }
    return products
    } catch (error) {
     console.log(error)   
    }
    
}

const createNewProducts = async (req,res) => {
   try {
    const body = req.body
    console.log(body)
    res.json({
        ok:true,
        data: body
    })
   } catch (error) {
    console.log(error)
   }
}

const updateProducts = (req,res)=>{
 try {
    let {id} = req.params
    const body = req.body
    res.json({
        message: 'success',
        product: body,
        id,
    })
 } catch (error) {
    console.log(error)
 }
}

const deleteProducts = async (req,res)=>{
   try {
    const {id} = req.params
    res.json({
        message: 'delete',
        id,
    })
   } catch (error) {
    console.log(error)
   }
}

const getOneProduct = (req,res)=>{
    try {
        let {id} = req.params    
    res.json({
        id,
        'name':'Teclado',
        'price':2000,
        'category': 'Tecnologia'
    })
    } catch (error) {
      console.log(error)  
    }
}

module.exports = 
{
    getAllProducts,
    createNewProducts,
    updateProducts,
    deleteProducts,
    getOneProduct
}