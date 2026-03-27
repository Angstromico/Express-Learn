import FriendModel, { type IFriendModel } from 'models/friends.model'

async function deleteFriendById(
  id: string,
): Promise<Omit<IFriendModel, 'age'> | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedFriend = FriendModel.deleteById(id)
      resolve(deletedFriend)
    }, 1500)
  })
}

export default deleteFriendById
