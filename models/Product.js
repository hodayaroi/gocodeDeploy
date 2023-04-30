import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    image:{
      type:String,
      require:true
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