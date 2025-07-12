import mongoose from "mongoose";



// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     currency: string;
//     image: string;
// }

const productModel = new mongoose.Schema({

    "id":{
        required: true, //like not null
        type: Number,
        unique: true,  //unique key constraints
        index: true    //For better performance
    },

    "name":{
        required: true,  //product ekkta name ekk tiyen one eka true
        type: String
    },

    "price":{
        required: true,
        type: Number
    },

    "currency":{
        required: true,
        type: String
    },

    "image":{
        required: true,
        type: String
    }
});


//database eke table wala name denne me wge
const Product = mongoose.model('Product', productModel);
export default Product;