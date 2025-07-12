import {Request, Response} from "express";
import * as productService from "../services/products.service";

//controller function to handle get all products
export const getAllProducts = async (req:Request, res:Response) => {
try{
    const products = await productService.getAllProducts();
    res.status(200).json(products);
   }catch (error){
    console.error(error);
    res.status(500).json({error: 'something went wrong'});
   }
}

//controller function to handle save product
export const saveProduct = async (req:Request, res:Response) => {
    try {
        const newProduct = req.body;
        const validationError = await productService.validateProduct(newProduct);
        if(validationError){
            res.status(400).json({error: validationError});
            return;  //flow ek break krn request ek break krn (return) void type
        }
        const savedProduct =  productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    }catch (error){
        console.error(error);
        res.status(500).json({error: 'something went wrong'});
    }
}

export const getProduct = async (req:Request, res:Response) => {
    const productId =  parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({error: 'invalid product Id'});
        return;
    }
    const product = await productService.getProductById(productId);
    if(!product){
        res.status(404).json({error: 'product not found'}); //product nethan mek
        return;
    }
    res.status(200).json(product); //illapu product ek tiye nn mek ywnwa
}

export const updateProduct = async (req:Request, res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)) {
        res.status(400).json({error: 'invalid product Id'});
        return;
    }
    const updatedData = req.body;
    const updatedProduct = await productService.updateProduct(productId, updatedData);
    if(!updatedProduct){
        res.status(404).json({error: 'product not found'}); //id eken hoya gnn beri nn me error ek enawa
        return;
    }
    res.status(200).json(updatedProduct); //update product ek yewwa
}

export  const deleteProduct = async (req:Request, res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)) {
        res.status(400).json({error: 'invalid product Id'});
        return;
    }
    const deleteProduct = await productService.deleteProduct(productId)
    if(!deleteProduct){
        res.status(404).json({error: 'product not found'});
        return;
    }
    res.status(200).json({message: 'product deleted successfully!!!'});
}