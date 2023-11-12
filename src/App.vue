<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref, onMounted, defineProps, computed } from 'vue'
// import { ref } from 'vue';

const message = ref("You did it!")

// onMounted(() => {
//   setTimeout(() => {
//     message.value = "Message changed after 3 seconds!"
//   }, 3000)
// })


// Define the props that the App component expects
const props = defineProps(['user', 'fullName']);
const formattedFullName = computed(() => props.fullName());

// Access the user object in the setup function
// console.log(props.user);



console.log(formattedFullName.value); // Access the computed value

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="message" />

      <h1>Hello, {{ formattedFullName }}</h1>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
