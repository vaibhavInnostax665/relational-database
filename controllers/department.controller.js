import catchLogic from "../services/controllerLogic/catchLogic.js";
import createDepartment from "../services/controllerLogic/department/createDepartment.js";
import deleteDepartment from "../services/controllerLogic/department/deleteDepartment.js";
import getAll from "../services/controllerLogic/department/getAll.js";
import getById from "../services/controllerLogic/department/getById.js";
import paginationDepartment from "../services/controllerLogic/department/paginationDepartment.js";
import updateDepartment from "../services/controllerLogic/department/updateDepartment.js";




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
      const result = await updateDepartment(req.params.id, req.body);
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
      const result = await deleteDepartment(req.params.id);
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

  export const paginationDepartmentController = async (req, res) => {
    try {
      const result = await paginationDepartment(parseInt(req.params.page_number),parseInt(req.params.page_size));
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