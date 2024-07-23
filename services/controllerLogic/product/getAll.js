import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async(details)=>{
    
    return {"data":Users,"message":"Data of all users", status:200};
}

export default getAll;