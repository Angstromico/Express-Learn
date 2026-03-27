import FriendModel, { type IFriendModel } from 'models/friends.model'

async function createFriendServices(
  newFriend: Omit<IFriendModel, 'id'>,
): Promise<IFriendModel> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend = FriendModel.create(newFriend)
      resolve(friend)
    }, 1500)
  })
}

export default createFriendServices
