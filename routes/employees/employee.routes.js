import express from "express";
import { getAllController,getByIdController,createEmployeeController,updateEmployeeController,deleteEmployeeController,paginationEmployeeController } from "../../controllers/employee.controller.js";
const router = express.Router();

router.get('/',getAllController);
router.get('/:id', getByIdController);
router.post('/create',createEmployeeController);
router.get('/pagination/:page_number/:page_size',paginationEmployeeController);
router.put('/:id',updateEmployeeController);
router.delete('/:id',deleteEmployeeController);


export default router;