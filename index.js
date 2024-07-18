import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users/user.routes.js";
import employeeRoutes from "./routes/employees/employee.routes.js";
import departmentRoutes from "./routes/department/department.routes.js";


const app = express();

dotenv.config();

app.use(express.json());
app.use("/users",userRoutes);
app.use("/employees",employeeRoutes);
app.use("/department",departmentRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})