import  { Product } from "../models/Product.js";

export const addProductService = (productNew) => {
  const  createdProduct = new Product(productNew)
  return createdProduct;
}

export const getProductsAllService = () => {
    return Product.find({})
}

export const getOneProductService = (id) => {
    return Product.findOne({_id:id})
}

export const deleteProductService = (id) => {
    return Product.findOneAndDelete({_id: id})
}

export const updateProductService = (id, updateProduct) => {
    return Product.findOneAndUpdate({_id:id}, updateProduct, {new:true})
}