const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Shopping Shop!");
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

app.use("/images". express.static("public/images"),)
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB qoşuldu"))
.catch(err=> console.log(err))
