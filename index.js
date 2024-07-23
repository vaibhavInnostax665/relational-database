import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import userRoutes from "./routes/users/user.routes.js";
import employeeRoutes from "./routes/employees/employee.routes.js";
import departmentRoutes from "./routes/department/department.routes.js";
import authenticationRoutes from "./routes/authentication/auth.route.js";
import rabbitMqRoutes from "./routes/rabbitMq/product.route.js";
import auth from "./middlewares/authentication/auth.js";
import cookieParser from "cookie-parser";


const app = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = process.env.NODE_ENV.trim(" ");

console.log(`.${fileName}.env`);

dotenv.config({
    path: `${__dirname}/.env.${fileName}`
});
console.log(`${__dirname}/.env.${fileName}`);
const PORT = process.env.PORT;

console.log(process.env.DATABASE_URL);


app.use(cookieParser());
app.use(express.json());
app.use("/users",auth,userRoutes);
app.use("/employees",auth,employeeRoutes);
app.use("/department",auth,departmentRoutes);
app.use("/rabbitmq",rabbitMqRoutes);
app.use("/auth",authenticationRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})