import MessageModel, { type IMessageModel } from 'models/messages.model'

async function deleteMessageById(
  id: string,
): Promise<IMessageModel | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedMessage = MessageModel.deleteById(id)
      resolve(deletedMessage)
    }, 1500)
  })
}

export default deleteMessageById
