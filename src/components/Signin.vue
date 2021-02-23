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

    <dialog id="dialog">
      <h1>Error</h1>
      <p>{{ errorMessage }}</p>
      <button @click="closeDialog">CLOSE</button>
    </dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";

@Component
export default class Signup extends Vue {
  mailAddress = "";
  password = "";
  errorMessage = "";

  get dialog(): HTMLDialogElement {
    return document.getElementById("dialog") as HTMLDialogElement;
  }

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
        this.dialog.showModal();
      });
  }

  closeDialog() {
    this.dialog.close();
  }
}
</script>
