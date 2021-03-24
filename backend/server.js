require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

session = require("express-session");

connectDB();

// Routerlar include edilir
const productRoutes = require("./routers/productRoutes");
const authRouter = require("./routers/authRouter");

const app = express();

// session ve flash message
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

let sayac = 0;
app.get("/", (req, res) => {
    if (req.session.sayac) {
        req.session.sayac++;
    } else {
        req.session.sayac = 1;
    }
    res.json({ mesaj: "merhaba", sayacim: req.session.sayac });
});

//formdan gelen verilerin okunabilmesi icin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/user", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`));
