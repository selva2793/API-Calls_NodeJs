var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
},{
    collection:"gettable"
})

module.exports=mongoose.model('BlogPost', BlogPost);