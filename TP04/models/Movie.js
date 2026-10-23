const mongoose = require('mongoose');

const movieSchema =mongoose.Schema({
    title:{type:String,required:true},
    synopsis:{type:String,default:"Nosynopsis available"},
    image :{type:String,default : "No image"}
});
module.exports = mongoose.model('Movie',movieSchema);