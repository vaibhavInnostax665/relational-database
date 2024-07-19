import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationDepartment =  async(page_number,page_size)=>{
    let data = null, message="An error has occurred" , status = 400;
    const paginatedResult = await prisma.department.findMany({
        skip:page_number*page_size,
        take:page_size,
    });
    if(paginatedResult){
    data=paginatedResult;
    message="Paginated result";
    status = 200;}
    return {"data":data,"status":status,"message":message};
}

export default paginationDepartment;