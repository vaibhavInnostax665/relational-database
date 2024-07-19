import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const loginUser = async(details) =>{
const {username , password , email} = details;
let message ="Username not present", status=400,data=null;
const User = await prisma.authentic.findUnique({
    where:{
        username:username
    }
});
if(!User){
    return {"data": null, "message":message,"status":status};
}

const matching = await bcrypt.compare(password,User.password);

if(matching){
  
    const token = await jwt.sign({id:User.id},process.env.JWT_SECRET,{expiresIn:"1d"});
data = {"token":token};
message= "Logged in";
status = 200;
}

return {"data": data, "message":message,"status":status};

}

export default loginUser;