import MessageModel, { type IMessageModel } from 'models/messages.model'

async function getMessageByIdService(
  id: string,
): Promise<IMessageModel | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = MessageModel.findById(id)
      resolve(message)
    }, 1500)
  })
}

export default getMessageByIdService
