import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const creation = async(details)=>{
    console.log("entered function");
    const {name ,depName , phone , email, empType,salary } = details;
    console.log(name ,depName , phone , email, empType,salary );
    let message ="";
    let status;
let depId;
let empId;
    const Department = await prisma.department.findUnique({
        where:{
name: depName
        }
    }).then((res)=>
        depId=res.id
    ).catch(err => console.log(err));
    if(!Department){
await prisma.department.create({
    data:{
        name:depName
    }
}).then(console.log("new department created")).catch(err => console.log(err));
    }
    const Employee = await prisma.employee.create({
        data:{
            type: empType,
            salary:salary,
            depId:depId
        }
    }).then(res => empId=res.id).catch(err => console.log(err));
  
    console.log("Before prisma");

    const User = await prisma.user.create({
data:{
    name,
    phone,
    email,
    empId,
},
    }).then().catch(err=>console.log(err));
    console.log("After prisma");
  
 
 if(User){
    message = "New User Created";
status = 200; 
}   
const users = await prisma.user.findMany().catch(err => console.log(err));
return {"message":message,"status":status,"data":users};
}

export default creation;