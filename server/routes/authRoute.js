import  express  from "express";
import {registerController,loginController, testController, updateProfileController }from "../controllers/authController.js"
import { getProductController } from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";



const router=express.Router()

router.post('/register',registerController)


//login
 router.post('/login',loginController)


 router.get('/test',requireSignIn,isAdmin,testController)


 //proectd route auth
 router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
 })


 //admin
 router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
   res.status(200).send({ok:true});
})



//update profileee

router.put('/profile',requireSignIn,updateProfileController)



//orders

router.get('/orders',requireSignIn,getProductController )

export default router