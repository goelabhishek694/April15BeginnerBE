const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const url = "mongodb+srv://April15:Test123@cluster0.8vsqe7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((connection) => {
    console.log("Connected to DB");
})
.catch(err => {
    console.log(err);
});

//creating a product schema -> blueprint 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isInStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        default: "Miscellaneous",
    }
}, {timestamps: true});

//a model is a wrapper for the schema , it is used to query on db 
const ProductModel = mongoose.model("product", productSchema);

//Create
app.post("/api/products", async (req, res) => {
    let data = req.body;
    const product = await ProductModel.create({
        name: data.name,
        price: data.price,
        isInStock: data.isInStock,
        category: data.category 
    });
    console.log(product);
    return res.status(200).json({
        message: "Product created successfully",
        success: true,
        data: product
    });
});

//Read
app.get("/api/products", async (req, res) => {
    const allProducts = await ProductModel.find({});
    // const allProducts = await ProductModel.find({"isInStock": true});
    console.log(allProducts);
    return res.status(200).json({
        message: "Products retrieved successfully",
        success: true,
        data: allProducts
    });
});

app.get("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.findById(id);
    console.log(product);
    return res.status(200).json({
        message: "Product retrieved successfully",
        success: true,
        data: product
    });
});

app.put("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const update = req.body;
    const product = await ProductModel.findByIdAndUpdate(id, update, {returnDocument:'after'});
    console.log(product);
    return res.status(200).json({
        message: "Product updated successfully",
        success: true,
        data: product
    });
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    console.log(product);
    return res.status(200).json({
        message: "Product deleted successfully",
        success: true,
        data: product
    });
});



app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
