const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    item:{
        type:String,
        required:true
    }
});
const userModel=mongoose.model("items",userSchema);
module.exports=userModel;