const mongoose  = require('mongoose')

const connect = async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev')
  } catch (error) {
    console.log('error connecting to database')
  }
}


module.exports = connect