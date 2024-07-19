import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteDepartment = async(id) =>{
    let message="",status,data=null;
await prisma.department.delete({
    where:{
        id: id
    }
}).then((res)=>{
    message = "Department Deleted";
    status = 200;
}).catch((err)=>{
    message=err;
    status=400;
})
const departments = await prisma.department.findMany({
    include:{
        employees:true
    }
});
return {"data":data,"message":message,"status":status};
}
export default deleteDepartment;