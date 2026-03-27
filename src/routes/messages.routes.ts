import { Router } from 'express'
import { 
  getAllMessagesController, 
  getMessageByIdController, 
  getMessagesByUserIdController,
  createMessageController, 
  updateMessageByIdController, 
  deleteMessageByIdController 
} from 'controllers/messages'

const router = Router()

// GET /api/messages - Get all messages
router.get('/', getAllMessagesController)

// GET /api/messages/:id - Get message by ID
router.get('/:id', getMessageByIdController)

// GET /api/messages/user/:userId - Get messages by user ID
router.get('/user/:userId', getMessagesByUserIdController)

// POST /api/messages - Create a new message
router.post('/', createMessageController)

// PATCH /api/messages/:id - Update message by ID
router.patch('/:id', updateMessageByIdController)

// DELETE /api/messages/:id - Delete message by ID
router.delete('/:id', deleteMessageByIdController)

export default router

