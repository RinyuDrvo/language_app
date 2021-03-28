<template>
  <nav class="navbar">
    <div>
      <BaseButton
        class="navbar__button--list"
        :clickEvent="() => {}"
        :buttonStyle="listButtonStyle"
        >LIST</BaseButton
      >
      <BaseButton
        class="navbar__button--form"
        :clickEvent="() => {}"
        :buttonStyle="formButtonStyle"
        >FORM</BaseButton
      >
    </div>
    <BaseButton class="navbar__button--logout" :clickEvent="logout"
      >LOG OUT</BaseButton
    >

    <AuthErrorDialog :errorMessage="errorMessage" v-model="isShowErrorModal" />
  </nav>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import BaseButton, { ButtonStyle } from "@/components/atoms/BaseButton.vue";
import AuthErrorDialog from "@/components/organisms/AuthErrorDialog.vue";
import { AuthModule } from "@/store/modules/AuthStore";
import { ROUTER_NAMES } from "@/constants/routerNames";

@Component({
  components: {
    BaseButton,
    AuthErrorDialog,
  },
})
export default class NavBar extends Vue {
  errorMessage = "";
  isShowErrorModal = false;

  listButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#caf7e3",
  };

  formButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#edffec",
  };

  /** ログアウト処理 */
  async logout() {
    await AuthModule.signOut()
      .then(() => {
        this.$router.push({ name: ROUTER_NAMES.SIGN_IN }).catch(() => {});
      })
      .catch((err) => {
        this.errorMessage = err.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  &__button {
    &--list {
      margin-right: 1rem;
    }
  }
}
</style>