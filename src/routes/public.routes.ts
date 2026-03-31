import { Router } from 'express'
import path from 'path'
import getMountainController from 'controllers/publicFiles/get-mountain-controller'

const router = Router()

// GET /api/public/mountains - Get mountains image
router.get('/mountains', getMountainController)

// GET /api/public/* - Serve any file from public directory
router.get('*', (req, res) => {
  const filePath = path.join(process.cwd(), 'public', req.path.replace('/api/public', ''))
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({
        status: 'fail',
        message: 'File not found',
        path: filePath
      })
    }
  })
})

export default router
