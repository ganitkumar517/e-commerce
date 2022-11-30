const mangoose=require('mongoose');

const userscemma=new mangoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports=mongoose.model('user',userscemma);