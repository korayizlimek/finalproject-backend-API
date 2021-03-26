const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("@hapi/joi");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
            lowercase: true,
        },
        surname: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
            lowercase: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            minlength: 6,
            required: true,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { collection: "users", timestamps: true }
);

//verileri cagirdigmizda defult olarak bu fonksiyon geliyor b iz sifre gozuksun istemiyoruz
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user._id;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;
    // delete user.sifre;

    return user;
};

const schema = Joi.object({
    name: Joi.string().min(3).max(50).trim(),
    surname: Joi.string().min(3).max(50).trim(),
    userName: Joi.string().min(3).max(50).trim(),
    email: Joi.string().email().trim(),
    password: Joi.string().trim().min(6),
});

UserSchema.methods.generateToken = async function () {
    const loginUser = this;
    const token = await jwt.sign(
        { _id: loginUser._id, email: loginUser.email },
        "secretkey",
        { expiresIn: "1h" }
    );
    return token;
};

// method ekleme joi / veritabani kurallarindan once calisacak
//yeni bir user icin bu validation kullanilir
UserSchema.methods.joiValidation = function (userObject) {
    schema.required();
    return schema.validate(userObject); // Joi ya error yada value sunar
};

UserSchema.statics.SignIn = async (email, password) => {
    // girilen email ve password kurallara uyuyor mu?
    const { error, value } = schema.validate({ email, password });
    if (error) {
        throw this.createError(400, error);
    }

    //email/kullanici var mi?
    const user = await User.findOne({ email });

    if (!user) {
        throw createError(400, "Girilen email bulunamadi");
    }

    // passwordler ayni mi?
    const controlPassword = await bcrypt.compare(password, user.password);

    if (!controlPassword) {
        throw createError(400, "Girilen Sifre hatali");
    }

    return user;
};

//update icin bu validation kullanilir
UserSchema.statics.joiValidationForUpdate = function (userObject) {
    return schema.validate(userObject);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
