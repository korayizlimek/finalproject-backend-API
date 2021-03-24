const { body } = require("express-validator");
console.log("validate calisti");
console.log(body);
const validateNewUser = () => {
    return [
        body("email")
            .trim()
            .isEmail()
            .withMessage("Geçerli bir mail giriniz"),

        body("password")
            .trim()
            .isLength({ min: 6 })
            .withMessage("Şifre en az 6 karakter olmalı"),

        body("rePassword")
            .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("Şifreler aynı değil");
                }
                return true;
            }),

        body("name")
            .trim()
            .isLength({ min: 2 })
            .withMessage("isim en az 2 karakter olmalı"),

        body("surname")
            .trim()
            .isLength({ min: 2 })
            .withMessage("soyisim en az 2 karakter olmalı"),
    ];
};

module.exports = {
    validateNewUser,
};
