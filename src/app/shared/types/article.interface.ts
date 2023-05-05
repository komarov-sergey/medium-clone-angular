import { ProfileInterface } from "./profile.interface"

export interface ArticleInterface {
  //   id: 'cd8909d7-f34a-4f71-b8b6-8fb5dce245e2'
  slug: string
  title: string
  body: string
  description: string
  favoritesCount: number
  createdAt: string
  updatedAt: string
  favorited: boolean
  author: ProfileInterface
  tagList: string[]
}
