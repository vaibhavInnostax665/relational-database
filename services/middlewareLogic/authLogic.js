import { PrismaClient } from "@prisma/client";
import  jwt  from 'jsonwebtoken';

const prisma = new PrismaClient();

const authLogic = async(req)=>{
    let status , message,user;
        //  console.log("req : :", req);
        //const tokenH = req.headers['authorization'];
    const {token} = req.cookies;
     console.log(token);

    
    if(!token){
        status = 400;
        message = "Please login to access the data";
       return {"status":status,"message":message,"User":null};
    }
    const verify = await jwt.verify(token,process.env.JWT_SECRET);

   const User = await prisma.authentic.findUnique({
    where:{
        id:verify.id
    }
   })
   status =200;
   message= "logged in !!";
   return {"status":status,"message":message,"User":User}
}

export default authLogic;