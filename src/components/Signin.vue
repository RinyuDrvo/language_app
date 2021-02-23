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
    <router-link :to="{ name: 'Signup' }">Sign Up</router-link>
    <auth-error-dialog
      :errorMessage="errorMessage"
      v-model="isShowErrorModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import AuthErrorDialog from "@/components/AuthErrorDialog.vue";

@Component({
  components: {
    AuthErrorDialog,
  },
})
export default class Signup extends Vue {
  mailAddress = "";
  password = "";
  errorMessage = "";
  isShowErrorModal = false;

  signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.mailAddress, this.password)
      .then(() => {
        // ログイン成功時
        this.$router.push({ name: "Home" });
      })
      .catch((error) => {
        // ログイン失敗時
        this.errorMessage = error.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>
