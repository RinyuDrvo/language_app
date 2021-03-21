<template>
  <div class="signin">
    <h1>Sign In</h1>
    <SigninForm :signinEvent="signIn" v-model="loginParams" />
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
import { AuthModule } from "@/store/modules/AuthStore";
import { LoginParams } from "@/models/UserModel";
import SigninForm from "@/components/molecules/SigninForm.vue";

@Component({
  components: {
    AuthErrorDialog,
    SigninForm,
  },
})
export default class Signup extends Vue {
  private loginParams: LoginParams = {
    email: "",
    password: "",
  };

  errorMessage = "";
  isShowErrorModal = false;

  async signIn() {
    await AuthModule.signIn(this.loginParams)
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
