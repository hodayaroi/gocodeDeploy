import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { upload } from './middlewares/upload.js';
import cors from "cors"; // Import the cors package
import {
  getOneproductController,
  getAllProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "../servertoddo/controllers/Product.js"; 
dotenv.config();
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env
const app = express();
mongoose.set('strictQuery', false);

// Use the cors middleware
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"))
app.use(cors({
  origin: ["http://localhost:3000"]
}));


//MODEL
app.post('/api/addProduct', addProductController);
app.get("/api/products", getAllProductsController);
app.get("/api/productId/:productId", getOneproductController);
app.put("/api/updateProduct/:productId", updateProductController);
app.delete("/api/deleteProduct/:productId", deleteProductController);


//mongodb+srv://hodayaroi:<password>@cluster0.qds6shn.mongodb.net/test
app.get("*",(req,res)=>{
  res.sendFile(__dirname, "\client\build\index.json");
});

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {useNewUrlParser:true,useUnifiedTopology: true,wtimeout: 30000 },
  (err)=>{
    app.listen(PORT||9000,()=>{
      console.log("err",err);
      console.log("listen")
    })
  }
)
