import { getMountains } from 'services/publicFiles'
import type { Request, Response } from 'express'

function getMountainController(req: Request, res: Response) {
  const mountains = getMountains()
  res.json({
    status: 'success',
    data: {
      mountains,
    },
  })
}

export default getMountainController
