import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Não autorizado." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return res.status(401).json({ success: false, message: "Não autorizado." });
    }

    req.userId = decoded.userId;
    next();

    try {
        
    } catch (error) {
        console.log("Erro ao verificar token: ", error);
        return res.status(500).json({ success: false, message: "Erro ao verificar token." });
    }
};