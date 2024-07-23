import catchLogic from "../services/controllerLogic/catchLogic.js";
// import buy from "../services/controllerLogic/product/buy.js";



const catchResult = catchLogic();
export const getAllController = async(req, res) => {

    try {
      const result = await productAll(req.body);
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
  
  export const addController = async(req, res) => {

    try {
      const result = await add(req.body);
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

  export const buyController = async(req, res) => {

    try {
      const result = await buy(req.body);
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
  