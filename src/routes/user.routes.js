import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import verifyJWT from "../middlewares/auth.middleware.js"
const router = Router()

router.post(
  "/register",
  (req, res, next) => {
    console.log("Route reached");
    next();
  },
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  (req, res, next) => {
    console.log("Multer finished");
    next();
  },
  registerUser
);
router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)
export default router