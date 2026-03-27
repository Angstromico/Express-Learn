import asyncHandler from 'express-async-handler'
import { getAllMessagesServices } from 'services/messages'
import { OK, NOT_FOUND } from 'utils/http-codes'

const getAllMessagesController = asyncHandler(async (req, res) => {
  const messages = await getAllMessagesServices()

  if (!messages || messages.length === 0) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: 'There are no messages yet',
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      messages,
    },
  })
})

export default getAllMessagesController
