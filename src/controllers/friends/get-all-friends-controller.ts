import asyncHandler from 'express-async-handler'
import { getAllFriendsServices } from 'services/friends'
import { OK, NOT_FOUND } from 'utils/http-codes'

const getAllFriendsController = asyncHandler(async (req, res) => {
  const friends = await getAllFriendsServices()

  if (!friends) {
    res.status(NOT_FOUND).json({
      status: 'fail',
      message: 'There are not friends yet',
    })
    return
  }

  res.status(OK).json({
    status: 'success',
    data: {
      friends,
    },
  })
})

export default getAllFriendsController
