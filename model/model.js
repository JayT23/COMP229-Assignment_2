
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    published: { type: Boolean, required: true },
    category: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = { Product, Category }; 
