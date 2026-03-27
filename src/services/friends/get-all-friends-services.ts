import FriendModel, { type IFriendModel } from 'models/friends.model'

async function getAllFriendsServices(): Promise<IFriendModel[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friends = FriendModel.findAll()
      resolve(friends)
    }, 1500)
  })
}

export default getAllFriendsServices
