import { PrismaClient } from '@prisma/client';
import authLogic from '../../services/middlewareLogic/authLogic.js';


const prisma = new PrismaClient();


const auth = async (req,res,next)=>{
    try {
  
        const result = await authLogic(req);
    //    console.log(result);
    //    console.log(result.User);
       if(result.User !== null){
        next();}
        else{res.status(result.status).send(result.message)};
    } catch (error) {
       return next(error); 
    }
}


export default auth;