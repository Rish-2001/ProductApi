const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
 
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"Price must be provided"],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{value} is not supported`,
        }
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("Product",productSchema);
