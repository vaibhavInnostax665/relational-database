import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getById = async (id)=>{
const User = await prisma.user.findUnique({
    where :{
        id: id
    },
    include:{
        employmentDetails: {
            include:{
                department:true
            }
        }
        
    }
})
if(User){
return {"data": User,"message":"user found","status":200}
}
return {"data": null,"message":"user not found","status":400}
}

export default getById;