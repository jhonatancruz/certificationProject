var mongo = require('mongodb')
var ObjectId= mongo.ObjectId;

// include mongoose
const mongoose= require('mongoose')

// create a schema
const NewsSchema = new mongoose.Schema({
    sourceName:{type:String},
    author: {type:String},
    title:{type:String},
    description: {type:String},
    type: {type:String},
    url: {type:String},
    urlToImage: {type:String},
    publishedAt: {type:Date},
    content: {type:String}
},{
    timestamps:true
})

NewsSchema.methods.generateNewsObject = function () {
    return {
        sourceName: this.sourceName,
        author: this.email,
        title: this.type,
        description: this.description,
        type: this.type,
        url: this.url,
        urlToImage: this.urlToImage,
        publishedAt: this.publishedAt,
        content: this.content
        // token:this.generateToken()
    }
}

// create a model
const News = mongoose.model('News', NewsSchema)

module.exports= News
