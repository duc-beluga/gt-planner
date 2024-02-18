import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(userController.createUser)
router.route('/addPlan').post(userController.addPlanToUser)
router.route('/getPlans').post(userController.getUserPlans)
export default router