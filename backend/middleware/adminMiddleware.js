const admin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({
            mesaj: "Erisim engellendi admin degilsin.",
        });
    }
    next();
};

module.exports = admin;
