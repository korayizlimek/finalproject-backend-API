const User = require("../models/userModels");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
};

const getLoggedInUser = (req, res, next) => {
    res.json(req.user);
};

const updateLoggedInUser = async (req, res, next) => {
    delete req.body.createdAt;
    delete req.body.updateAt;
    // delete req.body.password;

    if (req.body.hasOwnProperty("password")) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const { error, value } = User.joiValidationForUpdate(req.body);
    if (error) {
        next(createError(400, error));
    } else {
        try {
            const result = await User.findByIdAndUpdate(
                { _id: req.user._id },
                req.body,
                { new: true, runValidators: true }
            );
            if (result) {
                return res.json(result);
            } else {
                return res.status(404).json({
                    message: "Kullanici Bulunamadi",
                });
            }
        } catch (err) {
            next(createError(400, err));
        }
    }
};

const createNewUser = async (req, res, next) => {
    try {
        const willAddUser = new User(req.body);

        // eklemenden hemen once validation yaptik
        const { error, value } = willAddUser.joiValidation(req.body);

        //sifreleme
        willAddUser.password = await bcrypt.hash(willAddUser.password, 10);

        if (error) {
            next(createError(400, error));
        } else {
            const sonuc = await willAddUser.save();
            res.json(sonuc);
        }
    } catch (err) {
        next(err);
        console.error("user kaydederken hata:" + err);
    }
    // res.status(200).json(req.body);
};

const login = async (req, res, next) => {
    try {
        const user = await User.SignIn(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.json({ user, token });
    } catch (err) {
        next(err);
    }
};

const updateUserById = async (req, res, next) => {
    delete req.body.createdAt;
    delete req.body.updateAt;
    // delete req.body.password;

    if (req.body.hasOwnProperty("password")) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const { error, value } = User.joiValidationForUpdate(req.body);
    if (error) {
        next(createError(400, error));
    } else {
        try {
            const result = await User.findByIdAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            );
            if (result) {
                return res.json(result);
            } else {
                return res.status(404).json({
                    message: "Kullanici Bulunamadi",
                });
            }
        } catch (err) {
            next(createError(400, err));
        }
    }
};

const deleteAllUsers = async (req, res, next) => {
    try {
        const result = await User.deleteMany({ isAdmin: false });
        if (result) {
            res.json({
                message: "Tum Kullanicilar silindi.",
            });
        } else {
            throw createError(404, "Kullanici bulunamadi.");
        }
    } catch (err) {
        next(createError(400, err));
    }
};

const deleteYourself = async (req, res, next) => {
    try {
        const result = await User.findByIdAndDelete({
            _id: req.user._id,
        });
        if (result) {
            res.json({
                message: "Kullanici silindi.",
            });
        } else {
            throw createError(404, "Kullanici bulunamadi.");
        }
    } catch (err) {
        next(createError(400, err));
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const result = await User.findByIdAndDelete({
            _id: req.params.id,
        });
        if (result) {
            res.json({
                message: "Kullanici silindi.",
            });
        } else {
            throw createError(404, "Kullanici bulunamadi.");
        }
    } catch (err) {
        next(createError(400, err));
    }
};

module.exports = {
    getAllUsers,
    getLoggedInUser,
    updateLoggedInUser,
    createNewUser,
    login,
    updateUserById,
    deleteAllUsers,
    deleteYourself,
    deleteUser,
};
