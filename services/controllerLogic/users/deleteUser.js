import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUser = async(id)=>{
    console.log("before function id : ",id);
    let found = false;
    const User = await prisma.user.findUnique(
        {
            where:{
                id : id
            }
        }
    ).then(async(res)=>{
        console.log(res);
        found=true;
await prisma.employee.delete({
    where:{
id : res.empId,
    }
})
.catch((err)=>{
    console.log("Error in deleting employee tabel : ", err);
})
    }).catch((err) => {console.log("User not found",err)});

if(!found){
    return {"data": null, "message":"User not found", "status":400}
}
const users = await prisma.user.findMany();
return {"data": users, "message":"User  deleted", "status":200}
}

export default deleteUser;