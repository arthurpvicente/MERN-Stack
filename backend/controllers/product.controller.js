import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Get all products
export const getProducts = async (req, res) => {
    try {
        // Fetch all products from database
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new product
export const createProduct = async (req, res) => {
    const product = req.body;

    // Validate required fields
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ 
            success: false, 
            message: "Please provide all fields" 
        });
    }

    // Create new product instance
    const newProduct = new Product(product);

    try {
        // Save product to database
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update existing product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false, 
            message: "Invalid Product Id" 
        });
    }

    try {
        // Update product and return updated document
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            product, 
            { new: true }
        );
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false, 
            message: "Invalid Product Id" 
        });
    }

    try {
        // Delete product from database
        await Product.findByIdAndDelete(id);
        res.status(200).json({ 
            success: true, 
            message: "Product deleted" 
        });
    } catch (error) {
        console.log("error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};