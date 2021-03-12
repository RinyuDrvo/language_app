<template>
  <div class="signin">
    <h1>Sign In</h1>
    <form>
      <label for="email">email</label>
      <input type="email" id="email" v-model="email" />
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
import AuthErrorDialog from "@/components/organisms/AuthErrorDialog.vue";
// import * as Firebase from "@/service/FirebaseService";
import { AuthModule } from "@/store/modules/AuthStore";
import { LoginParams } from "@/models/UserModel";

@Component({
  components: {
    AuthErrorDialog,
  },
})
export default class Signup extends Vue {
  email = "";
  password = "";
  errorMessage = "";
  isShowErrorModal = false;

  async signIn() {
    const loginParams: LoginParams = {
      email: this.email,
      password: this.password,
    };

    await AuthModule.signIn(loginParams)
      .then(() => {
        this.$router.push({ name: "Home" });
      })
      .catch((err) => {
        this.errorMessage = err.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>
