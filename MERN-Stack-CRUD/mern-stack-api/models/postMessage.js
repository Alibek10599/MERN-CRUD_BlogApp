const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    title : {type:String},
    message : {type:String},
    image: {
        data: Buffer,
        contentType: String
    }

},'postMessages')

module.exports = { PostMessage}