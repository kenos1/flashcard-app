import 'uno.css'
import './assets/style.css'
import '@unocss/reset/tailwind.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
