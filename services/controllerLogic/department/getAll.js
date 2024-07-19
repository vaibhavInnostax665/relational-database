import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async(details)=>{
    try {
    const Users = await prisma.department.findMany({
        include: {
            employees: {
                include:{
                    user:true
                }
            }
        }
    });
    return {"data":Users,"message":"Data of all departments", status:200};
} catch(error) {
    console.log(error)
}
}

export default getAll;