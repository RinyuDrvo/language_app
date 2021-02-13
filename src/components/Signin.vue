<template>
  <div class="signup">
    <form>
      <label for="email">email</label>
      <input type="email" id="email" v-model="mailAddress" />
      <label for="password">password</label>
      <input type="password" id="password" v-model="password" />
      <button @click.prevent="signIn">Sing In</button>
    </form>
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
        alert('success')
      }).catch(() => {
        // エラー時の処理
      });
  }
}
</script>
