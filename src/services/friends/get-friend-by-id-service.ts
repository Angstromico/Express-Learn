import FriendModel, { type IFriendModel } from 'models/friends.model'

async function getFriendByIdService(
  id: string,
): Promise<IFriendModel | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend = FriendModel.findById(id)
      resolve(friend)
    }, 1500)
  })
}

export default getFriendByIdService
