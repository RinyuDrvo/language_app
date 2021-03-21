<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <SignupForm :signupEvent="signUp" v-model="registParams" />
    <router-link :to="{ name: 'Signin' }">Sign In</router-link>

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
import { RegistParams } from "@/models/UserModel";
import SignupForm from "@/components/molecules/SignupForm.vue";

@Component({
  components: {
    AuthErrorDialog,
    SignupForm,
  },
})
export default class Signup extends Vue {
  private registParams: RegistParams = {
    email: "",
    password: "",
  };

  private errorMessage = "";
  private isShowErrorModal = false;

  private async signUp() {
    await AuthModule.signUp(this.registParams)
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
