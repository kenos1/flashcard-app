import { writable } from 'svelte/store'
import { APP_LS_CONFIG_KEY, FlashcardAppConfig, defaultFlashcardAppConfig } from './configuration'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function localStorage() {
  const { subscribe, set } = writable<FlashcardAppConfig>(defaultFlashcardAppConfig)

  const changeConfig = (value: FlashcardAppConfig): void => {
    window.localStorage.setItem(APP_LS_CONFIG_KEY, JSON.stringify(value))
  }

  const storage = window.localStorage.getItem(APP_LS_CONFIG_KEY)
  if (storage) {
    set(JSON.parse(storage))
  } else {
    changeConfig(defaultFlashcardAppConfig)
  }

  return {
    subscribe,
    update: (v: FlashcardAppConfig): void => changeConfig(v)
  }
}

export const localConfig = localStorage()

export const sidebarOpen = writable(true)
