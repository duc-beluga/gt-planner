import express from "express";
import userController from "../controllers/userController.js";
// import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// POST /users: Create a new user
router.route("/").post(userController.createUser);

// GET /users/:email/plans: Get user plans
// POST /users/:email/plans: Add plan to user
router
  .route("/:uid/plans")
  .get(userController.getUserPlans)
  .post(userController.addPlanToUser);

// PUT /users/:email/plans/:planName: Update plan for user
// DELETE /users/:email/plans/:planName: Delete plan for user
router
  .route("/:uid/plans/:planName")
  .put(userController.updateUserPlan)
  .delete(userController.deleteUserPlan);

export default router;
