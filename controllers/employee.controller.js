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
  
  export const createEmployeeController = async (req, res) => {
    try {
      const result =await createEmployee(req.body);
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
  
  
  export const updateEmployeeController = async (req, res) => {
    try {
      const result = await updateEmployee(parseInt(req.params.id), req.body);
      return res.status(result.status).json({
        message: result.message,
        data: result.dEmployee
      });
    } catch {
      return res.status(catchResult.status).json({
          message: catchResult.message,
          data: catchResult.data,
        });
    }
  };
  
  export const deleteEmployeeController = async (req, res) => {
    try {
      const result = await deleteEmployee(parseInt(req.params.id));
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