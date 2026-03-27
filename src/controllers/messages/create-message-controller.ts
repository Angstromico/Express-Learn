import asyncHandler from 'express-async-handler'
import { createMessageServices } from 'services/messages'
import { CREATED, BAD_REQUEST } from 'utils/http-codes'

const createMessageController = asyncHandler(async (req, res) => {
  const { text, userId } = req.body

  if (!text || !userId) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'Text and userId are required',
    })
    return
  }

  const message = await createMessageServices({ text, userId })

  res.status(CREATED).json({
    status: 'success',
    data: {
      message,
    },
  })
})

export default createMessageController
