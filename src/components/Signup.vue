<template>
  <div class="signup">
    <table>
      <tr>
        <th>メールアドレス</th>
      </tr>
      <tr>
        <td><input type="email" v-model="mailAddress" /></td>
      </tr>
      <tr>
        <th>パスワード：</th>
      </tr>
      <tr>
        <td><input type="password" v-model="password" /></td>
      </tr>
    </table>
    <button @click='signUp'>登録</button>
    <router-link :to="{ name: 'Signin' }">Sign In</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Signup extends Vue {
  mailAddress = '';
  password = '';

  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.mailAddress, this.password)
      .then(
        // 成功時の処理
      ).catch(
        // エラー時の処理
      );
  }
}
</script>
