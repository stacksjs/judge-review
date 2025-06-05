export interface BenchAuthor {
  id: number
  name: string
  imageUrl: string
}

export interface Judge {
  id: string
  name: string
  court: string
  imageUrl: string
}

export interface BenchReviews {
  id: number
  author: BenchAuthor
  judge: Judge
  title: string
  content: string
  date: string
  dateTime: string
  likes: number
  rating: number
  comments: number
  type: string
  status: string
}

export interface NotificationUser {
  name: string
  imageUrl: string
}

export interface BenchNotification {
  id: number
  user: NotificationUser
  message: string
  time: string
  unread: boolean
}
