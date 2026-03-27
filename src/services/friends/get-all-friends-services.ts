import { friends, type IFriends } from 'data/friends'

async function getAllFriendsServices(): Promise<IFriends[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(friends)
    }, 1500)
  })
}

export default getAllFriendsServices
