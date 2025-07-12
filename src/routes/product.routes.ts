import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct} from "../controllers/product.controller";
import {saveProduct} from "../controllers/product.controller";
import {updateProduct} from "../controllers/product.controller";

const productRouter:Router = Router();

//handle requests

//controller eke api liwa getallproduct methode ek thmi methn demma
productRouter.get("/all", getAllProducts); //get all kiyana controller method eka call wenne
productRouter.post("/save", saveProduct); //save
productRouter.get("/:id" , getProduct);
productRouter.put("/update/:id" , updateProduct);
productRouter.delete("/delete/:id" , deleteProduct);

export default productRouter;