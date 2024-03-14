import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

// POST /users: Create a new user
router.route("/").post(userController.createUser);

// GET /users/:uid/plans: Get user plans
// POST /users/:uid/plans: Add plan to user
router
  .route("/:uid/plans")
  .get(userController.getUserPlans)
  .post(userController.addPlanToUser);

// PUT /users/:uid/plans/:planName: Update plan for user
// DELETE /users/:uid/plans/:planName: Delete plan for user
router
  .route("/:uid/plans/:planName")
  .put(userController.updateUserPlan)
  .delete(userController.deleteUserPlan);

// GET /users/:uid/plans: Get user plans' names
router.route("/:uid/plans/names").get(userController.getUserPlansName);

export default router;
