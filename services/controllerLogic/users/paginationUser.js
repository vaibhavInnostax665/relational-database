import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationUser =  async(page_number,page_size)=>{

    let data = null, message="An error has occurred" , status = 400;
    const paginatedResult = await prisma.user.findMany({
        skip:page_number*page_size,
        take:page_size,
        include:{
            employmentDetails: {
                include:{
                    department:true
                }
            }
            
        }
    });
    if(paginatedResult){
    data=paginatedResult;
    message="Paginated result";
    status = 200;}
    return {"data":data,"status":status,"message":message};
}

export default paginationUser;