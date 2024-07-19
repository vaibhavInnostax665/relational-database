import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getById = async (id)=>{
const Department = await prisma.department.findUnique({
    where :{
        id: id
    },
    include: {
        employees: {
            include:{
                user:true
            }
        }
    }
})
if(Department){
return {"data": Department,"message":"Department found","status":200}
}
return {"data": null,"message":"Department not found","status":400}
}

export default getById;