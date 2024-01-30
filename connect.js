const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect('mongodb+srv://saradhab21aid:saradha@cluster0.gtbuphz.mongodb.net/?retryWrites=true&w=majority');
}