<template>
  <nav class="navbar">
    <div>
      <BaseButton
        class="navbar__button--list"
        :clickEvent="onClickLanguageList"
        :buttonStyle="listButtonStyle"
        >LIST</BaseButton
      >
      <BaseButton
        class="navbar__button--form"
        :clickEvent="onClickLanguageAdd"
        :buttonStyle="formButtonStyle"
        >ADD</BaseButton
      >
    </div>
    <BaseButton
      class="navbar__button--logout"
      :clickEvent="onClickLogout"
      :buttonStyle="logoutButtonStyle"
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
    color: "white",
    backgroundColor: "#e4bad4",
  };

  formButtonStyle: ButtonStyle = {
    color: "white",
    backgroundColor: "#f6dfeb",
  };

  logoutButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#ddd",
  };

  /** 言語一覧に遷移 */
  onClickLanguageList() {
    this.$router.push({ name: ROUTER_NAMES.LANGUAGE_LIST });
  }

  /** 言語追加に遷移 */
  onClickLanguageAdd() {
    this.$router.push({ name: ROUTER_NAMES.LANGUAGE_ADD });
  }

  /** ログアウト処理 */
  async onClickLogout() {
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
