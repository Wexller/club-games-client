export type User = {
  username: string
  image: string
}

export type Game = {
  title: string
  description?: string
  image?: string
}

export type Location = {
  title: string
  description?: string
  address: string
}

export type GameEnrollment = {
  id: number
  date: Date
  host: User
  game: Game
  location: Location
  price: string
  participants: User[]
  maxParticipants: number
  completed: boolean
  onParticipate?: () => void
  onShowAvailable?: () => void
}
