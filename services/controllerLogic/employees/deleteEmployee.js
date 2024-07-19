import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteEmployee = async(id) =>{
    let message="",status,data=null;
await prisma.employee.delete({
    where:{
        id: id
    }
}).then((res)=>{
    message = "Employee Deleted";
    status = 200;
}).catch((err)=>{
    message=err;
    status=400;
})
const Employees = await prisma.employee.findMany({
    include:{
        user:true
    }
});
data = Employees;
return {"data":data,"message":message,"status":status};
}
export default deleteEmployee;