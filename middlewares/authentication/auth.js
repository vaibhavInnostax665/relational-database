import { PrismaClient } from '@prisma/client';
import  jwt  from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const prisma = new PrismaClient();
const auth = async (req,res,next)=>{
    try {
      //  console.log("req : :", req);
        //const tokenH = req.headers['authorization'];
        const {token} = req.cookies;
        console.log(token);
        
        if(!token){
            res.status(400).send('Please login to access the data');
            return next('Please login to access the data');
        }
        const verify = await jwt.verify(token,process.env.JWT_SECRET);
      //  console.log("verify : ", verify);
       const User = await prisma.authentic.findUnique({
        where:{
            id:verify.id
        }
       })
       if(User){
        next();}
        else{console.log("error in auth middleware")};
    } catch (error) {
       return next(error); 
    }
}


export default auth;