const express = require('express');
const router = express.Router();

const allProducts = [
    { name: "Wireless headphones", category: "electronics", price: 120.19, img: "./headphones.png", width: 200, height: 180, source: "/Details?item=headphones"},
    { name: "Casual t-shirt", category: "fashion", price: 35.35, img: "./T-shirt.png", width: 150, height: 150, source: "/Details?item=t-shirt" },
    { name: "Nike Running shoes", category: "shoes", price: 95.89, img: "./shoes.png", width: 160, height: 160, source: "/Details?item=shoes" },
    { name: "Apple smartwatch", category: ["electronics", "gifts"], price: 250.15, img: "./smartwatch.png", width: 160, height: 160, source: "/Details?item=smartwatch" },
    { name: "Leather handback", category: "fashion", price: 80.22, img: "./handback.png", width: 160, height: 160, source: "/Details?item=handback" },
    { name: "Huawei smartphone", category: "electronics", price: 450.46, img: "./smartphone.png", width: 160, height: 160, source: "/Details?item=smartphones" },
    { name: "Sunglasses", category: ["fashion", "gifts"], price: 60.37, img: "./sunglasses.webp", width: 220, height: 160, source: "/Details?item=sunglasses" },
    { name: "Home lamp", category: "home", price: 40, img: "./lamp.png", width: 160.48, height: 160, source: "/Details?item=lamp" },
    { name: "Nicon hand camera", category: "electronics", price: 700.99, img: "./camera.png", width: 180, height: 180, source: "/Details?item=camera" },
    { name: "TriDerma hand cream", category: "beauty", price: 25.57, img: "./hand-cream.png", width: 160, height: 160, source: "/Details?item=hand-cream" },
    { name: "De Beers bracelet", category: ["fashion", "accessories", "gifts"], price: 350.55, img: "./bracelet.png", width: 160, height: 160, source: "/Details?item=bracelet" },
    { name: "Thalia Olive Oil Cream", category: "beauty", price: 30.97, img: "./oil-cream.png", width: 160, height: 160, source: "/Details?item=oil-cream" },
    { name: "Haute Luxe Eau De Parfume", category: ["beauty", "accessories", "gifts"], price: 120.88, img: "./parfume.png", width: 120, height: 120, source: "/Details?item=parfume" },
    { name: "HP Laptop", category: "electronics", price: 1000.76, img: "./laptop.png", width: 150, height: 160, source: "/Details?item=laptop" },
];

router.get("/", (req, res) => {
    res.jsonp(allProducts);
})

router.get("/:id", (req, res) => {
    const product = allProducts.find(p => p.id === parseInt(req.params.id))
    res.json(product)
})

module.exports = router;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    category: [String],
    price: Number,
    img: String,
})

module.exports = mongoose.model("Product", productSchema);

const Product = require("../models/Product");

router.get("/", async (req, res) => {
    const category = req.query.category;
    const products = category
        ? await Product.find({ category })
        : await Product.find();
    res.json(products);
});

router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

module.exports = router