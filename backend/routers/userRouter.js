const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const UserController = require("../controllers/userController");
//* api/users/

//tum kullanicilari sadece admin listeleyebilsin
router.get(
    "/",
    [authMiddleware, adminMiddleware],
    UserController.getAllUsers
);

//oturum acan kullanici bilgileri
router.get("/me", authMiddleware, UserController.getLoggedInUser);

router.patch("/me", authMiddleware, UserController.updateLoggedInUser);

router.post("/", UserController.createNewUser);

router.post("/login", UserController.login);

router.patch("/:id", UserController.updateUserById);

router.delete("/me", authMiddleware, UserController.deleteYourself);

// DeleteAll
router.get(
    "/deleteAll",
    [authMiddleware, adminMiddleware],
    UserController.deleteAllUsers
);

router.delete(
    "/:id",
    [authMiddleware, adminMiddleware],
    UserController.deleteUser
);

module.exports = router;
