<template>
  <div class="signup">
    <h1 class="signup__title">Sign Up</h1>
    <SignupForm
      class="signup__form"
      :signupEvent="signUp"
      v-model="registParams"
    />
    <BaseButton
      class="signup__button--signin"
      :clickEvent="onClickSignin"
      :buttonStyle="signupButtonStyle"
      >SIGN IN</BaseButton
    >

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
import BaseButton, { ButtonStyle } from "@/components/atoms/BaseButton.vue";
import { ROUTER_NAMES } from "@/constants/routerNames";

@Component({
  components: {
    AuthErrorDialog,
    SignupForm,
    BaseButton,
  },
})
export default class Signup extends Vue {
  private registParams: RegistParams = {
    email: "",
    password: "",
  };

  private signupButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#ddd",
  };

  private errorMessage = "";
  private isShowErrorModal = false;

  private async signUp() {
    await AuthModule.signUp(this.registParams)
      .then(() => {
        this.$router.push({ name: ROUTER_NAMES.LANGUAGE_LIST }).catch(() => {});
      })
      .catch((err) => {
        this.errorMessage = err.message;
        this.isShowErrorModal = true;
      });
  }

  private onClickSignin() {
    this.$router.push({ name: ROUTER_NAMES.SIGN_IN }).catch(() => {});
  }
}
</script>

<style lang="scss" scoped>
.signup {
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__title {
    margin-top: 0;
    margin-bottom: 5rem;
    color: gray;
  }

  &__form {
    margin-bottom: 1rem;
  }

  &__button {
    &--signin {
      margin-bottom: 10rem;
    }
  }
}
</style>
