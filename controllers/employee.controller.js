import catchLogic from "../services/controllerLogic/catchLogic.js";
import deleteEmployee from "../services/controllerLogic/employees/deleteEmployee.js";
import getAll from "../services/controllerLogic/employees/getAll.js";
import getById from "../services/controllerLogic/employees/getById.js";
import paginationEmployee from "../services/controllerLogic/employees/paginationEmployee.js";
import updateEmployee from "../services/controllerLogic/employees/updateEmployee.js";


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
      const result = await updateEmployee(req.params.id, req.body);
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
      const result = await deleteEmployee(req.params.id);
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

  export const paginationEmployeeController = async (req, res) => {
    try {
      const result = await paginationEmployee(parseInt(req.params.page_number),parseInt(req.params.page_size));
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