import { Request, Response, NextFunction } from 'express'
import FriendModel from 'models/friends.model'
import MessageModel from 'models/messages.model'

const dataPopulationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Initialize models with empty data
  FriendModel.initialize()
  MessageModel.initialize()
  
  // Populate models with data from data folder
  FriendModel.populate()
  MessageModel.populate()
  
  next()
}

export default dataPopulationMiddleware
