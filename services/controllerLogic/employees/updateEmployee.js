import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateEmployee = async(id,details)=>{
    const updatedEmployee = await prisma.employee.update({
        where:{
            id:id
        },
        data:details,
    }).catch((err)=>{console.log("update error : ",err )});
    const Employee = await prisma.employee.findUnique({
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
    return {"data":Employee,"status":200,"message":"daetails updated"}
}

export default updateEmployee;