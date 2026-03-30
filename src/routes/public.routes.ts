import { Router } from 'express'
import getMountainController from 'controllers/publicFiles/get-mountain-controller'

const router = Router()

// GET /api/public/mountains - Get mountains
router.get('/mountains', getMountainController)

export default router
