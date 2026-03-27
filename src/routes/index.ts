import {Router} from 'express'
import mainRouter from './main.routes'
import messagesRouter from './messages.routes'
import friendsRouter from './friends.routes'
import { NOT_FOUND } from 'utils/http-codes'

const router = Router()

router.use('/', mainRouter)
router.use('/api/messages', messagesRouter)
router.use('/api/friends', friendsRouter)

router.use((req, res, next) => {
  res.status(NOT_FOUND).json({
    message: 'Route not found!!'
  });
});

export default router

