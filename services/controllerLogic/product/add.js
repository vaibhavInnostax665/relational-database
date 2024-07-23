import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



const add = async(details) => {
    const {name , price} = details;
    if(!name || !price){
        return {"message" : "Please provide name, price and description" , "status":400}
    }
    const product = await prisma.product.create({
        data: details,
    });
    return {"message":"Product created", "status":200}
}


export default add;