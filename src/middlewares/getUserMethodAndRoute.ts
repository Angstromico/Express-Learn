import asyncHandler from 'express-async-handler'
import { Request, Response, NextFunction } from 'express'

const getUserMethodAndRoute = () =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now()
    console.log(`${req.method} ${req.originalUrl}`)
    res.on('finish', () => {
      const duration = Date.now() - start
      console.log(`${req.method} ${req.originalUrl} ${duration}ms`)
    })
    next()
  })

export default getUserMethodAndRoute
