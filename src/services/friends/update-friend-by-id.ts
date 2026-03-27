import { friends, type IFriends } from 'data/friends'

async function updateFriendById(
  id: string,
  updates: Partial<Omit<IFriends, 'id'>>,
): Promise<IFriends | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friendIndex = friends.findIndex((friend) => friend.id === id)
      if (friendIndex === -1) {
        resolve(null)
      } else {
        friends[friendIndex] = {
          ...friends[friendIndex],
          ...updates,
        }
        resolve(friends[friendIndex])
      }
    }, 1500)
  })
}

export default updateFriendById
