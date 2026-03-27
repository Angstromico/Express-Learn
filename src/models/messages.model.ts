import { messages, type IMessages } from 'data/messages'

export interface IMessageModel extends IMessages {}

export class MessageModel {
  private static messages: IMessageModel[] = []

  // Initialize with empty data - will be populated by middleware
  static initialize(): void {
    this.messages = []
  }

  // Populate from data folder (called by middleware)
  static populate(): void {
    this.messages = messages.map(message => ({ ...message }))
  }

  // Get all messages
  static findAll(): IMessageModel[] {
    return this.messages
  }

  // Find message by ID
  static findById(id: string): IMessageModel | undefined {
    return this.messages.find(message => message.id === id)
  }

  // Find messages by user ID
  static findByUserId(userId: string): IMessageModel[] {
    return this.messages.filter(message => message.userId === userId)
  }

  // Create new message
  static create(messageData: Omit<IMessageModel, 'id' | 'timestamp'>): IMessageModel {
    const newMessage: IMessageModel = {
      id: `${this.messages.length + 1}`,
      ...messageData,
      timestamp: new Date().toISOString()
    }
    this.messages.push(newMessage)
    return newMessage
  }

  // Update message by ID
  static updateById(id: string, updates: Partial<Omit<IMessageModel, 'id' | 'timestamp'>>): IMessageModel | null {
    const messageIndex = this.messages.findIndex(message => message.id === id)
    if (messageIndex === -1) {
      return null
    }
    
    this.messages[messageIndex] = {
      ...this.messages[messageIndex],
      ...updates
    }
    
    return this.messages[messageIndex]
  }

  // Delete message by ID
  static deleteById(id: string): IMessageModel | null {
    const messageIndex = this.messages.findIndex(message => message.id === id)
    if (messageIndex === -1) {
      return null
    }
    
    const deletedMessage = this.messages.splice(messageIndex, 1)[0]
    return deletedMessage
  }
}

export default MessageModel
