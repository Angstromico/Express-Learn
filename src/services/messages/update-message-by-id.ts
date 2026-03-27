import MessageModel, { type IMessageModel } from 'models/messages.model'

async function updateMessageById(
  id: string,
  updates: Partial<Omit<IMessageModel, 'id' | 'timestamp'>>,
): Promise<IMessageModel | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = MessageModel.updateById(id, updates)
      resolve(message)
    }, 1500)
  })
}

export default updateMessageById
