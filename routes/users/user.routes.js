import express from "express";
import { getAllController,getByIdController, createUserController,deleteUserController,updateUserController} from "../../controllers/users.controller.js";

const router = express.Router();

router.get('/',getAllController);
router.get('/:id', getByIdController);
router.post('/create',createUserController);
// router.get('/pagination',getAllByPagination);
router.put('/:id',updateUserController);
router.delete('/:id',deleteUserController);


export default router;