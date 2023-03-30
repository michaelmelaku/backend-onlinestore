const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');

const authRoutes = require("./routes/auth");
const userProfileRoutes = require("./routes/userProfile");
const productRoutes = require("./routes/product");
const stripeRoutes = require("./routes/stripe");
const orderRoutes = require("./routes/order");
const invoiceRoutes = require("./routes/invoice");
const logoRoutes = require("./routes/logo");

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Database Connected Successfully!"))
        .catch((err) => {
            console.log(err.message);
    });

app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/userProfiles", userProfileRoutes);
app.use("/api/products", productRoutes);
app.use("/api/checkout", stripeRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/logo", logoRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on port: ${process.env.PORT}`)
})
