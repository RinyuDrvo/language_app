<template>
  <div class="signin">
    <h1 class="signin__title">Sign In</h1>
    <SigninForm
      class="signin__form"
      :signinEvent="signIn"
      v-model="loginParams"
    />
    <BaseButton
      class="signin__button--signup"
      :clickEvent="onClickSignup"
      :buttonStyle="signinButtonStyle"
      >SIGN UP</BaseButton
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
import { LoginParams } from "@/models/UserModel";
import SigninForm from "@/components/molecules/SigninForm.vue";
import BaseButton, { ButtonStyle } from "@/components/atoms/BaseButton.vue";
import { ROUTER_NAMES } from "@/constants/routerNames";

@Component({
  components: {
    AuthErrorDialog,
    SigninForm,
    BaseButton,
  },
})
export default class Signup extends Vue {
  private loginParams: LoginParams = {
    email: "",
    password: "",
  };

  private signinButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#ddd",
  };

  private errorMessage = "";
  private isShowErrorModal = false;

  private async signIn() {
    await AuthModule.signIn(this.loginParams)
      .then(() => {
        this.$router.push({ name: ROUTER_NAMES.LANGUAGE }).catch(() => {});
      })
      .catch((err) => {
        this.errorMessage = err.message;
        this.isShowErrorModal = true;
      });
  }

  private onClickSignup() {
    this.$router.push({ name: ROUTER_NAMES.SIGN_UP }).catch(() => {});
  }
}
</script>

<style lang="scss" scoped>
.signin {
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
    &--signup {
      margin-bottom: 10rem;
    }
  }
}
</style>
