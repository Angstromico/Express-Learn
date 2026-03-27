import MessageModel, { type IMessageModel } from 'models/messages.model'

async function createMessageServices(
  newMessage: Omit<IMessageModel, 'id' | 'timestamp'>,
): Promise<IMessageModel> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = MessageModel.create(newMessage)
      resolve(message)
    }, 1500)
  })
}

export default createMessageServices
