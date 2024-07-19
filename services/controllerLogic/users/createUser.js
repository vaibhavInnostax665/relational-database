import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const creation = async (details) => {

  const { name, depName, phone, email, empType, salary } = details;

  let message = "";
  let status;
  let depId;
  let empId;
  let userID;
  if (name && depName && phone && email && empType && salary) {
    const Department = await prisma.department
      .findUnique({
        where: {
          name: depName,
        },
      })
      .then(async (res) => {
        depId = res.id;
        await prisma.employee
        .create({
          data: {
            type: empType,
            salary: salary,
            depId: depId,
          },
        })
        .then(async(res) => {empId = res.id;
          await prisma.user
      .create({
        data: {
          name,
          phone,
          email,
          empId,
        },
      })
      .then((res) => userID = res.id)
      .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      })
      .catch(async (err) => {
        await prisma.department
          .create({
            data: {
              name: depName,
            },
          })
          .catch((err) => {
          
            console.log(err);
          })
      });

    // const Employee = await prisma.employee
    //   .create({
    //     data: {
    //       type: empType,
    //       salary: salary,
    //       depId: depId,
    //     },
    //   })
    //   .then((res) => (empId = res.id))
    //   .catch((err) => console.log(err));

   
    // const User = await prisma.user
    //   .create({
    //     data: {
    //       name,
    //       phone,
    //       email,
    //       empId,
    //     },
    //   })
    //   .then((res) => (userID = res.id))
    //   .catch((err) => console.log(err));

    // if (User) {
    //   message = "New User Created";
    //   status = 200;
    // }

    const User = await prisma.user
      .findUnique({
        where: {
          id: userID,
        },
        include: {
          employmentDetails: {
            include: {
              department: true,
            },
          },
        },
      })
      .catch((err) => console.log(err));

if(User){
  message = "New User Created";
  status = 200;
}
    return { "message": message, "status": status, "data": User };
  }
  return { "message": "missing details", "status": 400, "data": null };
};

export default creation;
