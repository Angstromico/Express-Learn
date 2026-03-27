import asyncHandler from 'express-async-handler'
import { updateMessageById } from 'services/messages'
import { OK, NOT_FOUND, BAD_REQUEST } from 'utils/http-codes'

const updateMessageByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params
  const updates = req.body

  if (!updates || Object.keys(updates).length === 0) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'At least one field is required for update',
    })
    return
  }

  const message = await updateMessageById(id, updates)

  if (!message) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: `Message with id ${id} does not exist`,
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      message,
    },
  })
})

export default updateMessageByIdController
