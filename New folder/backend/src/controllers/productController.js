import product from "../models/productModel.js";

export const addProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();

        return res.status(201).json({ success: true, message: "Product added successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}