import MessageModel, { type IMessageModel } from 'models/messages.model'

async function getMessagesByUserIdService(
  userId: string,
): Promise<IMessageModel[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const messages = MessageModel.findByUserId(userId)
      resolve(messages)
    }, 1500)
  })
}

export default getMessagesByUserIdService
