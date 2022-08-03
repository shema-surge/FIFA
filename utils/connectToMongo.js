const { connect } = require('mongoose')

async function connectToDb(){
    try{
        await connect(process.env.MONGO_URI)
        console.log('Connected to mongo')
    }catch(err){
        console.error(err)
    }
}

module.exports = {connectToDb}