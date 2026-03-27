import asyncHandler from 'express-async-handler'
import { getMessageByIdService } from 'services/messages'
import { OK, NOT_FOUND } from 'utils/http-codes'

const getMessageByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params
  const message = await getMessageByIdService(id)

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

export default getMessageByIdController
