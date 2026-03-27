import MessageModel, { type IMessageModel } from 'models/messages.model'

async function getAllMessagesServices(): Promise<IMessageModel[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const messages = MessageModel.findAll()
      resolve(messages)
    }, 1500)
  })
}

export default getAllMessagesServices
