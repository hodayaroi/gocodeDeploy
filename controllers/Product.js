import { Product } from "../models/Product.js";
import {addProductService,getProductsAllService,getOneProductService,deleteProductService,updateProductService} from "../services/Product.js";
 export const getOneproductController  = async (req, res) => {
    try{
    const productId = req.params.productId;
    const product = await getOneProductService(productId);
    if(!product){
        res.status(404).send({message: "no such product with the specific id"})
      }
    res.send(product);}
    catch(e){
        console.log(e)
      res.send(e.message)
    }
  }

  export const getAllProductsController =  async (req, res) => {
    try {
      const product = await getProductsAllService();
      res.send(product);
    } catch (e) {
      console.log(e);
      res.status(500).send(e.message);
    }
  }

  export const addProductController = async (req, res) => {
    try {
      const { title,image, description, price, category } = req.body;
      const product = await Product.create({ title, description, price, category, image });
      const createdProduct = addProductService(product);
      await createdProduct.save()
      res.send(createdProduct);
  
    } catch (e) {
      console.log(e)
      res.status(500).send(e.message)
    }
  }
  

  export const updateProductController = async (req, res) => {
    const { productId } = req.params;
    const updatedProduct ={...req.body};
    try {
      const result = await updateProductService(productId,updatedProduct);
      if(!result){
        res.status(404).send({message: "no such product with the specific id"})
      }
      res.send(result);
    } catch (e) {
      console.log(e);
      res.send(e.message);
    }
  }

  export const deleteProductController = async(req, res) => {
    try{
    const { productId } = req.params;
    console.log(productId)
    const product =await deleteProductService(productId);
    if(!product){
        res.status(404).send({message: "no such todo with the specific id"})
      }
      res.send(product)
    } catch(e){
      console.log(e)
      res.send(e.message)
    }
  }

  