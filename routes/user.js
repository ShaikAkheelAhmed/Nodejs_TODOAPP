import express from "express"
import {register,logout,getmyprofile,login} from "../controllers/user.js"
import {isAuthenticated} from '../middlewares/auth.js'


const router = express.Router() 

router.post("/new", register)

router.post("/login", login)

router.get("/me",isAuthenticated,getmyprofile)


router.get("/logout", logout)


export default router