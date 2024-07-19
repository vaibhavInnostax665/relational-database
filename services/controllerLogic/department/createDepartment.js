import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createDepartment = async (details) => {
   const newDepartment =  await prisma.department
    .create({
      data: details
    })

    return {"data":newDepartment,"status":200,"message":"New Department Created"}
}

export default createDepartment;