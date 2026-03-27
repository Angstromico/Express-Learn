import { Router } from 'express'
import { 
  getAllFriendsController, 
  getFriendByIdController, 
  createFriendController, 
  updateFriendByIdController, 
  deleteFriendByIdController 
} from 'controllers/friends'

const router = Router()

// GET /api/friends - Get all friends
router.get('/', getAllFriendsController)

// GET /api/friends/:id - Get friend by ID
router.get('/:id', getFriendByIdController)

// POST /api/friends - Create a new friend
router.post('/', createFriendController)

// PATCH /api/friends/:id - Update friend by ID
router.patch('/:id', updateFriendByIdController)

// DELETE /api/friends/:id - Delete friend by ID
router.delete('/:id', deleteFriendByIdController)

export default router
