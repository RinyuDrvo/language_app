<template>
  <nav class="navbar">
    <BaseButton :clickEvent="logout">LOG OUT</BaseButton>

    <AuthErrorDialog :errorMessage="errorMessage" v-model="isShowErrorModal" />
  </nav>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import BaseButton from "@/components/atoms/BaseButton.vue";
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
