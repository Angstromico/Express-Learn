import { friends, type IFriends } from 'data/friends'

async function deleteFriendById(
  id: string,
): Promise<Omit<IFriends, 'age'> | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friendIndex = friends.findIndex((friend) => friend.id === id)
      if (friendIndex === -1) {
        resolve(null)
      } else {
        const deletedFriend = friends.splice(friendIndex, 1)[0]
        resolve({ id: deletedFriend.id, name: deletedFriend.name })
      }
    }, 1500)
  })
}

export default deleteFriendById
