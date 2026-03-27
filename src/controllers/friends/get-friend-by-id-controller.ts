import asyncHandler from 'express-async-handler'
import { getFriendByIdService } from 'services/friends'
import { OK, NOT_FOUND, BAD_REQUEST } from 'utils/http-codes'

const getFriendByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'Friend id is required',
    })
  }

  const friend = await getFriendByIdService(id)

  if (!friend) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: `Friend with id ${id} does not exist`,
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      friend,
    },
  })
})

export default getFriendByIdController
