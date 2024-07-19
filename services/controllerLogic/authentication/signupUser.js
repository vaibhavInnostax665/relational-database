import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const signupUser = async(details) =>{
const {username , password , email} = details;
let message ="Username already there", status=400;
const User = await prisma.authentic.findUnique({
    where:{
        username:username
    }
});
if(User){
    return {"data": null, "message":message,"status":status};
}

const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(password,salt);

const newUser = await prisma.authentic.create({
    data:{
        username,
        email,
        password:hashPassword
    },
}).then((res)=>{
    message= "New User Created";
    status = 200;
}).catch((res)=>{
    console.log(res);
});

return {"data": null, "message":message,"status":status};

}

export default signupUser;