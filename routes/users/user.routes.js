import express from "express";
import { getAllController,getByIdController, createUserController,deleteUserController,updateUserController, paginationUserController} from "../../controllers/users.controller.js";

const router = express.Router();

router.get('/',getAllController);
router.get('/:id', getByIdController);
router.post('/create',createUserController);
router.get('/pagination/:page_number/:page_size',paginationUserController);
router.put('/update/:id',updateUserController);
router.delete('/delete/:id',deleteUserController);


export default router;