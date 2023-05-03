

function errorLogs (err,req,res,next){
    console.log('errologs')
    console.error(err)
    next(err)
}


function handlerError(err,req,res,next){
    console.log('handlError')
    res.status(501).json({
        message: err.message,
        stack: err.stack
    })
}


module.exports = {
    errorLogs,
    handlerError
}