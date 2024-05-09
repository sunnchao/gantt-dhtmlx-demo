import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ganttastic from '@infectoone/vue-ganttastic'
const app = createApp(App)

app.use(ElementPlus)
app.use(ganttastic)
app.mount('#app')