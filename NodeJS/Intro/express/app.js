const express = require("express");
const connectToDB = require("./config/db");
const {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} = require("./controller/product");

connectToDB();
const app = express();
app.use(express.json());

//Create
app.post("/api/products", createProduct);

//Read
app.get("/api/products", getAllProducts);

app.get("/api/products/:id", getProduct);

//Update
app.put("/api/products/:id", updateProduct);

//Delete
app.delete("/api/products/:id", deleteProduct);

app.listen(8081, () => {
  console.log(`Server is listening on port 3000`);
});
