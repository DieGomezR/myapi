const faker = require('faker')
const boom = require('@hapi/boom')
const sequelize = require('../libs/sequelize')


const getAllProducts =  async(req,res) =>{
    try {
    const query = 'SELECT * FROM tasks'
    const [data] = await sequelize.query(query)
    return {
        data
    }
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