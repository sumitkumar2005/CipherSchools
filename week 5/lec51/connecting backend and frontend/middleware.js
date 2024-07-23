const { verifyToken } = require('./jwt');
const User = require('./User');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).send({ message: "Authorization header is missing" });
    }

    const token = authorization.substring(7);
    const { isValidToken, payload } = verifyToken(token);

    if (isValidToken) {
        try {
            const user = await User.findById(payload._id);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            req.user = user;
            req.token = token;
            next();
        } catch (err) {
            res.status(500).send({ message: 'Error verifying user' });
        }
    } else {
        res.status(403).send({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
