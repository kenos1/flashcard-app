import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Comfortaa'
      }
    })
  ],
  theme: {
    colors: {
      fg: 'var(--fg0)',
      'fg-1': 'var(--fg1)',
      'fg-2': 'var(--fg2)',

      bg: 'var(--bg0)',
      'bg-1': 'var(--bg1)',
      'bg-2': 'var(--bg2)'
    }
  }
})
