import asyncHandler from 'express-async-handler'
import deleteFriendById from 'services/friends/delete-friend-by-id'
import { OK, NOT_FOUND, BAD_REQUEST } from 'utils/http-codes'

const deleteFriendByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'Friend id is required',
    })
    return
  }

  const deletedFriend = await deleteFriendById(id)

  if (!deletedFriend) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: `Friend with id ${id} does not exist`,
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      friend: deletedFriend,
    },
  })
})

export default deleteFriendByIdController
