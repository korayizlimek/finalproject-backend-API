const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

const auth = async (req, res, next) => {
    try {
        if (req.header("Authorization")) {
            const token = req
                .header("Authorization")
                .replace("Bearer ", "");
            const result = jwt.verify(token, "secretkey");
            getUser = await User.findById({ _id: result._id });

            if (getUser) {
                req.user = getUser;
            } else {
                throw new Error("Lutfen giris yapin");
            }
            next();
        } else {
            throw new Error("Lütfen giriş yapın");
        }
    } catch (error) {
        next(error);
    }
};

module.exports = auth;
