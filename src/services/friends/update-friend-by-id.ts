import FriendModel, { type IFriendModel } from 'models/friends.model'

async function updateFriendById(
  id: string,
  updates: Partial<Omit<IFriendModel, 'id'>>,
): Promise<IFriendModel | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend = FriendModel.updateById(id, updates)
      resolve(friend)
    }, 1500)
  })
}

export default updateFriendById
