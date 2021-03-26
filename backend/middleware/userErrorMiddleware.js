const { json } = require("express");

const catchError = (err, req, res, next) => {
    // if (err.name === "CastError") {
    //     res.json({
    //         message: "Gecerli bir id giriniz.",
    //     });
    // } else {
    //     res.status(err.errorCode).json({
    //         errorName: err.name,
    //         message: err.message,
    //         errorCode: err.errorCode,
    //     });
    // }

    // console.log(err);

    if (err.code === 11000) {
        return res.json({
            // message:
            //     JSON.stringify(err.keyValue) + " unique olmalidir",
            message:
                Object.keys(err.keyValue) +
                " icin girdiginiz " +
                Object.values(err.keyValue) +
                " daha onceden veritabaninda oldugu icin tekrar eklenemez/guncellenemez",
            errorCode: 400,
        });
    }
    if (err.code === 66) {
        return res.json({
            message:
                "Degistirilemez bir alani guncellemeye calistiniz",
            errorCode: 400,
        });
    }

    res.status(err.statusCode || 500);
    res.json({
        errorCode: err.statusCode || 400,
        message: err.message,
    });
};

module.exports = catchError;
