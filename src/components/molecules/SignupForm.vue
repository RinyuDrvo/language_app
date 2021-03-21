<template>
  <form class="signup-form">
    <label for="email" class="signup-form__label">email</label>
    <BaseTextbox
      class="signup-form__textbox"
      id="email"
      v-model="registParams.email"
      :inputType="'email'"
      :inputSize="20"
      :maxLength="50"
    />
    <label for="password" class="signup-form__label">password</label>
    <BaseTextbox
      class="signup-form__textbox"
      id="password"
      v-model="registParams.password"
      :inputType="'password'"
      :inputSize="20"
      :maxLength="50"
    />
    <BaseButton :clickEvent="onClickSignup" class="signup-form__button"
      >SIGN UP</BaseButton
    >
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import BaseButton from "@/components/atoms/BaseButton.vue";
import BaseTextbox from "@/components/atoms/BaseTextbox.vue";
import { RegistParams } from "@/models/UserModel";

@Component({
  components: {
    BaseTextbox,
    BaseButton,
  },
})
export default class SigninForm extends Vue {
  private registParams: RegistParams = {
    email: "",
    password: "",
  };

  /** サインアップクリックイベント */
  @Prop({ required: true })
  signupEvent!: () => {};

  /** クリックイベントで親コンポーネントに入力情報を渡す */
  private onClickSignup() {
    this.signupEvent();
  }

  /** フォーム入力情報の更新 */
  private updateValue() {
    this.$emit("input", this.registParams);
  }

  /** 子コンポーネント入力の検知 */
  @Watch("registParams", { immediate: true, deep: true })
  onChangeForm() {
    this.updateValue();
  }
}
</script>

<style lang="scss" scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
