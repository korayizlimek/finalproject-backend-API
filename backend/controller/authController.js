const { validationResult } = require("express-validator");

const showLogin = (req, res, next) => {
    res.json("hello");
};
const showRegister = (req, res, next) => {
    res.json("hello");
};
const showForgetPassword = (req, res, next) => {
    res.json("hello");
};

// const register = (req, res, next) => {
//     const ErrorArray = validationResult(req);
//     // console.log(ErrorArray);
//     if (!ErrorArray.isEmpty()) {
//         // console.log(ErrorArray);
//         res.json({ hatalar: ErrorArray.array() });
//     }
//     console.log(req.body);
//     res.json("hello");
// };

const register = (req, res) => {
    const ErrorArray = validationResult(req);
    // console.log(ErrorArray);
    if (!ErrorArray.isEmpty()) {
        // console.log(ErrorArray);
        res.json({ hatalar: ErrorArray.array() });
    }

    // console.log("calisti");
    // console.log(req.body);
    // console.log("bitti");
    // res.send(
    //     `Calisti:<>${req.body.name}
    //     ${req.body.surname}
    //     ${req.body.email}
    //     ${req.body.password}
    //      ${req.body.rePassword}`
    // );
};

module.exports = {
    showLogin,
    showRegister,
    showForgetPassword,
    register,
};
