import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true
    },
    dateCreated:{
      type:Date,
      default:Date.now()
    },
    category:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    price:{
      type: Number,
      required:true
    }
  });
  
  
  export const Product = mongoose.model('Product', productSchema);