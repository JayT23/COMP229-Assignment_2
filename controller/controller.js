const {Product} = require('../model/model');
const {Category} = require('../model/model');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const { name, description, price, published, category } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            published,
            category
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a product by id
const updateProduct = async (req, res) => {
    const { name, description, price, published, category } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                price,
                published,
                category
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product by id
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete all products
const deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: "All products deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Find products by name
const findProductsByName = async (req, res) => {
    const keyword = req.query.name;

    try {
        const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get category by ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new category
const addCategory = async (req, res) => {
    const { name } = req.body; // Assuming category only has a name

    try {
        const category = new Category({
            name
        });
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a category by ID
const updateCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name
            },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(updatedCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndRemove(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({ message: "Category deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete all categories
const deleteAllCategories = async (req, res) => {
    try {
        await Category.deleteMany({});
        res.json({ message: "All categories deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
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
    deleteAllCategories,
};
