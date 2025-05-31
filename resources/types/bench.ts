
export interface BenchAuthor {
  id: number;
  name: string;
  imageUrl: string;
}
  
export interface BenchReviews {
  id: number;
  author: BenchAuthor;
  content: string;
  date: string;
  dateTime: string;
  likes: number;
  comments: number;
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