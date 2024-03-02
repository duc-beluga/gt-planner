import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(userController.createUser);
router.route("/addPlan").post(userController.addPlanToUser);
router.route("/deletePlan").delete(userController.deleteUserPlan);
router.route("/getPlans").post(userController.getUserPlans);
router.route("/updatePlan").post(userController.updatePlanUser);

export default router;
