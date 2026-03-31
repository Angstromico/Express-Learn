import { getMountains } from 'services/publicFiles'
import type { Request, Response } from 'express'
import { OK, NOT_FOUND } from 'utils/http-codes'

function getMountainController(req: Request, res: Response) {
  const imagePath = getMountains()
  
  // Send the actual image file instead of JSON
  res.status(OK).sendFile(imagePath, (err) => {
    if (err) {
      res.status(NOT_FOUND).json({
        status: 'fail',
        message: 'Image not found',
        error: err.message
      })
    }
  })
}

export default getMountainController
