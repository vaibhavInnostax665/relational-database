import catchLogic from "../services/controllerLogic/catchLogic.js";
import creation from "../services/controllerLogic/users/createUser.js";



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
      const result = await getById(parseInt(req.params.id));
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
    console.log("Entered controller");
    try {
      console.log("Enter the try block");
      const result =await creation(req.body);
      console.log("add result :", result);
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch(err) {
console.log(err);
      // console.log("inside catch block down");
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  
  export const updateUserController = async (req, res) => {
    try {
      const result = await updateUser(parseInt(req.params.id), req.body);
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
      const result = await deleteUser(parseInt(req.params.id));
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