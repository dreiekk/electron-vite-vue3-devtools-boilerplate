import devtools from '@vue/devtools'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'development') {
    devtools.connect()
}
