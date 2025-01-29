import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    category : {
        type : String
    },
    productDescription : {
        type : String
    },
    discountPercantage : {
        type : Number
    } ,
    stock : {
        type : Number
    },
    image  : {
        type  : String
    }
})

const Product = mongoose.model('Product', ProductSchema) ;

export default Product