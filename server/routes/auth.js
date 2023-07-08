import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
import {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);

router.put("/profile-update", requireSignin, profileUpdate);

// FIND PEOPLE TO FOLLOW :-

// find-people is the end point
// requireSignin is used since it requires logged in user 
// findPeople is controller function
router.get("/find-people", requireSignin, findPeople);

module.exports = router;