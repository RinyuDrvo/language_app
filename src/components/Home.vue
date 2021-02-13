<template>
  <div class="hello">
    <h1>Home</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Home extends Vue {
  logout() {
    firebase.auth().signOut().then(() => {
      // Sign out successful
    }).catch((error) => {
      // An error happened
      console.log(error);
    })
  }
}
</script>

<style scoped lang="scss">
</style>
