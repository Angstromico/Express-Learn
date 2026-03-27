import { friends, type IFriends } from 'data/friends'

async function createFriendServices(
  newFriend: Omit<IFriends, 'id'>,
): Promise<IFriends> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend: IFriends = {
        id: `${friends.length + 1}`,
        ...newFriend,
      }
      friends.push(friend)
      resolve(friend)
    }, 1500)
  })
}

export default createFriendServices
