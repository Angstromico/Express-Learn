import asyncHandler from 'express-async-handler'
import updateFriendById from 'services/friends/update-friend-by-id'
import { OK, NOT_FOUND, BAD_REQUEST } from 'utils/http-codes'

const updateFriendByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params
  const updates = req.body

  if (!updates || Object.keys(updates).length === 0) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'At least one field is required for update',
    })
    return
  }

  const friend = await updateFriendById(id, updates)

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

export default updateFriendByIdController
