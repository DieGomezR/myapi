const {models} = require('../libs/sequelize')


const getAllUsers = async (req,res)=> {
const response = await models.User.findAll()
return response
}

module.exports = {
    getAllUsers
}