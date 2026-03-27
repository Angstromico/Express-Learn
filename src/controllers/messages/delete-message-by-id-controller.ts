import asyncHandler from 'express-async-handler'
import { deleteMessageById } from 'services/messages'
import { OK, NOT_FOUND } from 'utils/http-codes'

const deleteMessageByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params
  const deletedMessage = await deleteMessageById(id)

  if (!deletedMessage) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: `Message with id ${id} does not exist`,
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      message: deletedMessage,
    },
  })
})

export default deleteMessageByIdController
