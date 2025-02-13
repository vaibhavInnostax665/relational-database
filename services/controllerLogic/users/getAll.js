import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async(details)=>{
    const Users = await prisma.user.findMany({
        include:{
            employmentDetails: {
                include:{
                    department:true
                }
            }
            
        }
    });
    return {"data":Users,"message":"Data of all users", status:200};
}

export default getAll;