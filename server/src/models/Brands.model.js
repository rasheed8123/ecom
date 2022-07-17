const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    Brand_Name:{type:String,required:true},
    product_id : [{type : mongoose.Schema.Types.ObjectId, ref:"product", required : flase}]
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("brand", BrandSchema)
