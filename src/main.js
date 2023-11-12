import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const user = ref({
    firstName: 'Jane',
    lastName: 'Doe'
});
  
function fullName() {
    return `${user.value.firstName} ${user.value.lastName}`;
}
  
createApp(App, { user, fullName }).mount('#app');
