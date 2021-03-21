<template>
  <form class="signin-form">
    <label for="email" class="signin-form__label">email</label>
    <BaseTextbox
      class="signin-form__textbox"
      id="email"
      v-model="loginParams.email"
      :inputType="'email'"
      :inputSize="20"
      :maxLength="50"
    />
    <label for="password" class="signin-form__label">password</label>
    <BaseTextbox
      class="signin-form__textbox"
      id="password"
      v-model="loginParams.password"
      :inputType="'password'"
      :inputSize="20"
      :maxLength="50"
    />
    <BaseButton :clickEvent="onClickSignin" class="signin-form__button"
      >SIGN IN</BaseButton
    >
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import BaseButton from "@/components/atoms/BaseButton.vue";
import BaseTextbox from "@/components/atoms/BaseTextbox.vue";
import { LoginParams } from "@/models/UserModel";

@Component({
  components: {
    BaseTextbox,
    BaseButton,
  },
})
export default class SigninForm extends Vue {
  private loginParams: LoginParams = {
    email: "",
    password: "",
  };

  /** サインインクリックイベント */
  @Prop({ required: true })
  signinEvent!: () => {};

  /** クリックイベントで親コンポーネントに入力情報を渡す */
  private onClickSignin() {
    this.signinEvent();
  }

  /** フォーム入力情報の更新 */
  private updateValue() {
    this.$emit("input", this.loginParams);
  }

  /** 子コンポーネント入力の検知 */
  @Watch("loginParams", { immediate: true, deep: true })
  onChangeForm() {
    this.updateValue();
  }
}
</script>

<style lang="scss" scoped>
.signin-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  &__label {
    margin-bottom: 0.5rem;
    color: gray;
  }

  &__textbox {
    margin-bottom: 1rem;
  }

  &__button {
    margin-top: 0.5rem;
  }
}
</style>
