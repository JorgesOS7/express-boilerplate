import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import path from 'path';

config({path: path.join(__dirname, '..', 'vars/.env')});

export default function auth(req, res, next) {


    const authHeader = req.headers.authorization;
    
    if(!authHeader)
        return res
            .status(500)
            .send({dados: [], codigo: 1, mensagem: 'Nenhum token fornecido'})
    
    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res
            .status(500)
            .send({dados: [], codigo: 1, mensagem: 'Error no token'});
    
    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res
            .status(401)
            .send({dados: [], codigo: 1, mensage: 'Token mal formatado'})

    jwt.verify(token, process.env.HASH, (err, decoded) => {
        if(err)
            return res
                .status(401)
                .send({dados: [],codigo: 1, mensagem: 'Token inválido ou expirado'})
        
        req.userID = decoded.id;

        return next();
    });
}