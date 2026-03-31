import { Router } from 'express'
import messagesViewController from 'controllers/views/messages-view-controller'

const router = Router()

// GET /messages - Render messages view with data from API
router.get('/messages', messagesViewController)

// GET /messages-dynamic - Render dynamic messages view with API integration
router.get('/messages-dynamic', (req, res) => {
  res.render('messages-dynamic', {
    title: 'Messages (Dynamic)'
  })
})

export default router
