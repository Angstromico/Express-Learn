import { friends, type IFriends } from 'data/friends'

async function getFriendByIdService(id: string): Promise<IFriends | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend = friends.find((friend) => friend.id === id) || null
      resolve(friend)
    }, 1500)
  })
}

export default getFriendByIdService
