//* /api/user
const router = require("express").Router();
const authController = require("../controller/authController");
const validatorMiddleware = require("../middleware/validationMiddleware");

router.get("/login", authController.showLogin);

router.get("/register", authController.showRegister);
// router.post(
//     "/register",
//     validatorMiddleware.validateNewUser(),
//     authController.register
// );

router.get("/forgetpassword", authController.showForgetPassword);

router.get("/register", authController.showRegister);
//deneme
router.post(
    "/register",
    validatorMiddleware.validateNewUser(),
    authController.register
);

module.exports = router;
