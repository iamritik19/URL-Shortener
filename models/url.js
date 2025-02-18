const mongoose=require('mongoose');
const urlSchema=new mongoose.Schema({
    shortId:{
        type: String,
        required:true,
        unique:true
    },
    redirectedId:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp: {type: Number}}]
},{timestamps:true}
);
const url=mongoose.model('url',urlSchema);
