import { friends, type IFriends } from 'data/friends'

export interface IFriendModel extends IFriends {}

export class FriendModel {
  private static friends: IFriendModel[] = []

  // Initialize with empty data - will be populated by middleware
  static initialize(): void {
    this.friends = []
  }

  // Populate from data folder (called by middleware)
  static populate(): void {
    this.friends = friends.map(friend => ({ ...friend }))
  }

  // Get all friends
  static findAll(): IFriendModel[] {
    return this.friends
  }

  // Find friend by ID
  static findById(id: string): IFriendModel | undefined {
    return this.friends.find(friend => friend.id === id)
  }

  // Create new friend
  static create(friendData: Omit<IFriendModel, 'id'>): IFriendModel {
    const newFriend: IFriendModel = {
      id: `${this.friends.length + 1}`,
      ...friendData
    }
    this.friends.push(newFriend)
    return newFriend
  }

  // Update friend by ID
  static updateById(id: string, updates: Partial<Omit<IFriendModel, 'id'>>): IFriendModel | null {
    const friendIndex = this.friends.findIndex(friend => friend.id === id)
    if (friendIndex === -1) {
      return null
    }
    
    this.friends[friendIndex] = {
      ...this.friends[friendIndex],
      ...updates
    }
    
    return this.friends[friendIndex]
  }

  // Delete friend by ID
  static deleteById(id: string): Omit<IFriendModel, 'age'> | null {
    const friendIndex = this.friends.findIndex(friend => friend.id === id)
    if (friendIndex === -1) {
      return null
    }
    
    const deletedFriend = this.friends.splice(friendIndex, 1)[0]
    return { id: deletedFriend.id, name: deletedFriend.name }
  }
}

export default FriendModel
