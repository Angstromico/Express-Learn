import asyncHandler from 'express-async-handler'
import createFriendServices from 'services/friends/create-friend-services'
import { CREATED, BAD_REQUEST } from 'utils/http-codes'

const createFriendController = asyncHandler(async (req, res) => {
  const { name, age } = req.body

  if (!name || !age) {
    res.status(BAD_REQUEST).json({
      status: 'fail',
      message: 'Name and age are required',
    })
    return
  }

  const friend = await createFriendServices({ name, age })

  res.status(CREATED).json({
    status: 'success',
    data: {
      friend,
    },
  })
})

export default createFriendController
