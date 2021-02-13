<template>
  <div class="signin">
    <h1>Sign In</h1>
    <form>
      <label for="email">email</label>
      <input type="email" id="email" v-model="mailAddress" />
      <label for="password">password</label>
      <input type="password" id="password" v-model="password" />
      <button @click.prevent="signIn">Sing In</button>
    </form>
    <router-link :to="{ name: 'Signup'}">Sign Up</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Signup extends Vue {
  mailAddress = '';
  password = '';

  signIn() {
    firebase.auth().signInWithEmailAndPassword(this.mailAddress, this.password)
      .then(() => {
        // 成功時の処理
        this.$router.push({ name: 'Home' })
      }).catch((error) => {
        // エラー時の処理
        throw new Error(error);
      });
  }
}
</script>
