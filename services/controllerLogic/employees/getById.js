import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getById = async (id)=>{
const Employee = await prisma.employee.findUnique({
    where :{
        id: id
    },
    include:{
        user:true,
    },
})
if(Employee){
return {"data": Employee,"message":"Employee found","status":200}
}
return {"data": null,"message":"Employee not found","status":400}
}

export default getById;