import express from "express";
import { getAllController,getByIdController,updateDepartmentController,deleteDepartmentController,createDepartmentController } from './../../controllers/department.controller.js';



const router = express.Router();

router.get('/',getAllController);
router.get('/:id', getByIdController);
router.post('/create',createDepartmentController);
//router.get('/pagination',getAllByPagination);
router.put('/:id',updateDepartmentController);
router.delete('/:id',deleteDepartmentController);


export default router;