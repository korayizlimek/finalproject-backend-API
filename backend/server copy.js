const express = require("express");
const userErrorMiddleware = require("./middleware/userErrorMiddleware");

//mongodb bagintisi
require("./db/dbConnection");

// ROUTERS
const userRouter = require("./router/userRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

// Middleware
app.use(userErrorMiddleware);

app.listen(5000, () => {
    console.log("5000 portundan ayaklandirildi");
});
