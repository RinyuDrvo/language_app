<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form>
      <label for="email">emali</label>
      <input type="email" v-model="email" id="email" />
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
import AuthErrorDialog from "@/components/AuthErrorDialog.vue";
import { AuthModule } from "@/store/modules/AuthStore";
import { RegistParams } from "@/models/UserModel";

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

  async signUp() {
    const registParams: RegistParams = {
      email: this.email,
      password: this.password,
    };

    await AuthModule.signUp(registParams)
      .then(() => {
        this.$router.push({ name: "Signin" });
      })
      .catch((err) => {
        this.errorMessage = err.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>
