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
        :buttonStyle="addButtonStyle"
        >ADD</BaseButton
      >
    </div>
    <BaseButton
      class="navbar__button--logout"
      :clickEvent="onClickLogout"
      :buttonStyle="logoutButtonStyle"
      >LOG OUT</BaseButton
    >
  </nav>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseButton, { ButtonStyle } from "@/components/atoms/BaseButton.vue";
import { AuthModule } from "@/store/modules/AuthStore";
import { ROUTER_NAMES } from "@/constants/routerNames";
import { COLORS } from "@/constants/colors";

@Component({
  components: {
    BaseButton,
  },
})
export default class NavBar extends Vue {
  /** エラーモーダル表示 */
  @Prop({ required: true })
  showAuthErrorDialog!: (errorMessage: string) => Promise<unknown>;

  errorMessage = "";
  isShowErrorModal = false;

  listButtonStyle: ButtonStyle = {
    color: COLORS.WHITE,
    backgroundColor: COLORS.DARK_CHERRY,
  };

  addButtonStyle: ButtonStyle = {
    color: COLORS.WHITE,
    backgroundColor: COLORS.LIGHT_CHERRY,
  };

  logoutButtonStyle: ButtonStyle = {
    color: COLORS.GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
  };

  // LISTボタン色の切り替え
  switchListButtonStyle() {
    this.listButtonStyle.backgroundColor =
      this.listButtonStyle.backgroundColor === COLORS.LIGHT_CHERRY
        ? COLORS.DARK_CHERRY
        : COLORS.LIGHT_CHERRY;
  }

  // ADDボタン色の切り替え
  switchAddButtonStyle() {
    this.addButtonStyle.backgroundColor =
      this.addButtonStyle.backgroundColor === COLORS.LIGHT_CHERRY
        ? COLORS.DARK_CHERRY
        : COLORS.LIGHT_CHERRY;
  }

  // ボタン色の切り替え
  switchButtonStyle() {
    this.switchListButtonStyle();
    this.switchAddButtonStyle();
  }

  /** 言語一覧に遷移 */
  onClickLanguageList() {
    if (this.$route.name !== ROUTER_NAMES.LANGUAGE_LIST)
      this.$router.push({ name: ROUTER_NAMES.LANGUAGE_LIST });

    this.switchButtonStyle();
  }

  /** 言語追加に遷移 */
  onClickLanguageAdd() {
    if (this.$route.name !== ROUTER_NAMES.LANGUAGE_ADD)
      this.$router.push({ name: ROUTER_NAMES.LANGUAGE_ADD });

    this.switchButtonStyle();
  }

  /** ログアウト処理 */
  async onClickLogout() {
    await AuthModule.signOut()
      .then(() => {
        this.$router.push({ name: ROUTER_NAMES.SIGN_IN }).catch(() => {});
      })
      .catch((err) => {
        this.showAuthErrorDialog(err.message);
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
