const mongoose=require("mongoose");

module.exports=()=>{
   return mongoose.connect("mongodb+srv://rasheed8123@cluster0.yca2t.mongodb.net/test")
};
