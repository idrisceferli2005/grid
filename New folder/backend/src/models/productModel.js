import mongoose from "mongoose";

const  productSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number },
    category: {type: String},
}, {collection:"Products", timestamps: true});

const product = mongoose.model("Product", productSchema);

export default product;