import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateDepartment = async(id,details)=>{
    const updatedUser = await prisma.department.update({
        where:{
            id:id
        },
        data:details,
    }).catch((err)=>{console.log("update error : ",err )});
    const User = await prisma.department.findUnique({
        where:{
            id:id
        },
        include: {
            employees: {
                include:{
                    user:true
                }
            }
        }
    });
    return {"data":User,"status":200,"message":"daetails updated"}
}

export default updateDepartment;