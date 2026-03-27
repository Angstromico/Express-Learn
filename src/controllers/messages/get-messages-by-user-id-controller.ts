import asyncHandler from 'express-async-handler'
import { getMessagesByUserIdService } from 'services/messages'
import { OK, NOT_FOUND } from 'utils/http-codes'

const getMessagesByUserIdController = asyncHandler(async (req, res) => {
  const { userId } = req.params
  const messages = await getMessagesByUserIdService(userId)

  if (!messages || messages.length === 0) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: `No messages found for user with id ${userId}`,
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

export default getMessagesByUserIdController
