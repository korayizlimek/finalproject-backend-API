require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

//! her calisitirdimizda onceki veriler siliniyor guncel veriler geliyor
//! npm run data:import
const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data Import Success");

        process.exit();
    } catch (err) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();
