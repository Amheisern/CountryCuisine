import { CSSProperties } from 'react'

export interface CSSStarsProperties extends CSSProperties {
  '--rating': number
}

export type CountryType = {
  id: number | undefined
  dateAdded: string | undefined
  name: string
  photoUrl: string
  flagUrl: string
  recipes: RecipeType[] | undefined
  movies: MovieType[] | undefined
  musics: MusicType[] | undefined
}

export type MovieType = {
  id: number | undefined
  dateAdded: string
  title: string
  description: string
  url: string
  photoUrl: string
  countryId: number
}

export type MusicType = {
  id: number | undefined
  dateAdded: string
  artist: string
  description: string
  url: string
  photoUrl: string
  countryId: number
}

export type RecipeType = {
  id: number | undefined
  dateAdded: string
  name: string
  url: string
  photoUrl: string
  description: string
  countryId: number
}
