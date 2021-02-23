<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form>
      <label for="email">emali</label>
      <input type="email" v-model="mailAddress" id="email" />
      <label for="password">password</label>
      <input type="password" v-model="password" id="password" />
      <button @click.prevent="signUp">Sing Up</button>
    </form>
    <router-link :to="{ name: 'Signin' }">Sign In</router-link>

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

  signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.mailAddress, this.password)
      .then(() => {
        // 成功時の処理
        this.$router.push({ name: "Signin" });
      })
      .catch((error) => {
        // エラー時の処理
        this.errorMessage = error.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>
