export const APP_LS_CONFIG_KEY = 'flashcard-app'

export type FlashcardAppConfig = {
  name: string
  recent?: {
    title: string
    path: string
  }[]
}

export const defaultFlashcardAppConfig: FlashcardAppConfig = {
  name: 'User'
}
