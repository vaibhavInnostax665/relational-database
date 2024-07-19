import catchLogic from "../services/controllerLogic/catchLogic.js";
import creation from "../services/controllerLogic/users/createUser.js";
import deleteUser from "../services/controllerLogic/users/deleteUser.js";
import getAll from "../services/controllerLogic/users/getAll.js";
import getById from "../services/controllerLogic/users/getById.js";
import paginationUser from "../services/controllerLogic/users/paginationUser.js";
import updateUser from "../services/controllerLogic/users/updateUser.js";


const catchResult = catchLogic();
export const getAllController = async(req, res) => {

    try {
      const result = await getAll();
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  export const getByIdController = async(req, res) => {
    try {
      const result = await getById(req.params.id);
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  export const createUserController = async (req, res) => {

    try {
 
      const result =await creation(req.body);
  
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch(err) {

      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  
  export const updateUserController = async (req, res) => {
    try {
      const result = await updateUser(req.params.id, req.body);
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  export const deleteUserController = async (req, res) => {
    try {
      const result = await deleteUser(req.params.id);
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };

  export const paginationUserController = async (req, res) => {
    try {

      const result = await paginationUser(parseInt(req.params.page_number),parseInt(req.params.page_size)).catch((err)=>console.log(err));
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };