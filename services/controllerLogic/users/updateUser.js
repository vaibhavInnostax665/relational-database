import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUser = async(id,details)=>{
    const updatedUser = await prisma.user.update({
        where:{
            id:id
        },
        data:details,
    }).catch((err)=>{console.log("update error : ",err )});
    const User = await prisma.user.findUnique({
        where:{
            id:id
        }
    });
    return {"data":User,"status":200,"message":"daetails updated"}
}

export default updateUser;