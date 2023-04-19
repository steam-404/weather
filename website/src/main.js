import { createApp } from 'vue'
import App from './App.vue'

//element
import element from 'element-plus'
import 'element-plus/dist/index.css'

const app=createApp(App)
app.use(element)
app.mount('#app')
