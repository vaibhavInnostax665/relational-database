import catchLogic from "../services/controllerLogic/catchLogic.js";

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
  
  export const createDepartmentController = async (req, res) => {
    try {
      const result =await createDepartment(req.body);
      console.log("add result :", result);
      return res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch {
      // console.log("inside catch block down");
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  
  export const updateDepartmentController = async (req, res) => {
    try {
      const result = await updateDepartment(parseInt(req.params.id), req.body);
      return res.status(result.status).json({
        message: result.message,
        data: result.dDepartment
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  export const deleteDepartmentController = async (req, res) => {
    try {
      const result = await deleteDepartment(parseInt(req.params.id));
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