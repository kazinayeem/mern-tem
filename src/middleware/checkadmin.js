// backend/middlewares/adminMiddleware.js
exports.isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ success: false, message: 'Access Denied: Admins only' });
    }
};
