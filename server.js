const express = require('express');
const { Product, Category } = require('./model/model');
//const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, deleteAllProducts, findProductsByName } = require('./controller/controller');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const { 
    getAllProducts, 
    getProductById, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    deleteAllProducts, 
    findProductsByName,
    getAllCategories, 
    getCategoryById,   
    addCategory,     
    updateCategory,   
    deleteCategory,   
    deleteAllCategories 
} = require('./controller/controller');

app.get('/api/products', getAllProducts);
app.get('/api/products/:id', getProductById);
app.post('/api/products', addProduct);
app.put('/api/products/:id', updateProduct);
app.delete('/api/products/:id', deleteProduct);
app.delete('/api/products', deleteAllProducts);
app.get('/api/products', findProductsByName);
app.get('/api/categories', getAllCategories);
app.get('/api/categories/:id', getCategoryById);
app.post('/api/categories', addCategory);
app.put('/api/categories/:id', updateCategory);
app.delete('/api/categories/:id', deleteCategory);
app.delete('/api/categories', deleteAllCategories);


app.get('/', (req, res) => {
    res.json({ message: "Welcome to the DressStore application" });
});

mongoose.connect('mongodb+srv://tuazonjayson23:MyPass1234.@cluster0.e5uc2oj.mongodb.net/DressStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const port = 8081;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
