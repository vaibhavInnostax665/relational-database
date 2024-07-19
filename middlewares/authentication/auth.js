import { PrismaClient } from '@prisma/client';
import  {jwt}  from 'jsonwebtoken';


const prisma = new PrismaClient();
const auth = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return next('Please login to access the data');
        }
        const verify = await jwt.verify(token,process.env.JWT_SECRET);
        console.log("verify : ", verify);
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



module.exports = auth;