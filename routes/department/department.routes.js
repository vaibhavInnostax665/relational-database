import express from "express";
import { getAllController,getByIdController,updateDepartmentController,deleteDepartmentController,createDepartmentController,paginationDepartmentController } from './../../controllers/department.controller.js';


const router = express.Router();

router.get('/',getAllController);
router.get('/:id', getByIdController);
router.post('/create',createDepartmentController);
router.get('/pagination/:page_number/:page_size',paginationDepartmentController);
router.put('/update/:id',updateDepartmentController);
router.delete('/delete/:id',deleteDepartmentController);


export default router;