import loginUser from "../services/controllerLogic/authentication/loginUser.js";
import signupUser from "../services/controllerLogic/authentication/signupUser.js";
import catchLogic from "../services/controllerLogic/catchLogic.js"



const catchResult = catchLogic();

export const signupController = async (req, res) => {
    try {

      const result = await signupUser(req.body);
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


  export const loginController = async (req, res) => {
    try {
      const result = await loginUser(req.body);
      return res
  .cookie("token", result.data.token || null)
  .status(result.status)
  .json({
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

  export const logoutController = (req,res)=>{
    return res.clearCookie('token').send("user logged out").status(200);

  }