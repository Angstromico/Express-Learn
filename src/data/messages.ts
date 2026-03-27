export interface IMessages {
  id: string
  text: string
  userId: string
  timestamp: string
}

export const messages: IMessages[] = [
  {
    id: '1',
    text: 'Hello, how are you?',
    userId: '1',
    timestamp: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    text: 'I am doing great, thanks!',
    userId: '2',
    timestamp: '2024-01-15T10:35:00Z'
  },
  {
    id: '3',
    text: 'What are you working on today?',
    userId: '1',
    timestamp: '2024-01-15T10:40:00Z'
  },
  {
    id: '4',
    text: 'Just finished my Node.js project',
    userId: '3',
    timestamp: '2024-01-15T10:45:00Z'
  },
  {
    id: '5',
    text: 'That sounds interesting!',
    userId: '2',
    timestamp: '2024-01-15T10:50:00Z'
  }
]
