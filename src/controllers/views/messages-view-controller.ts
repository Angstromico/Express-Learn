import { Request, Response } from 'express'
import { getAllMessagesServices } from 'services/messages'

async function messagesViewController(req: Request, res: Response) {
  try {
    const messages = await getAllMessagesServices()
    
    res.render('messages', {
      title: 'Messages',
      messages: messages || []
    })
  } catch (error) {
    res.render('messages', {
      title: 'Messages',
      messages: [],
      error: 'Failed to load messages'
    })
  }
}

export default messagesViewController
