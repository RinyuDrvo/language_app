<template>
  <div class="hello">
    <NavBar />
    <router-view></router-view>

    <auth-error-dialog
      :errorMessage="errorMessage"
      v-model="isShowErrorModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthErrorDialog from "@/components/organisms/AuthErrorDialog.vue";
import NavBar from "@/components/organisms/NavBar.vue";
import { AuthModule } from "@/store/modules/AuthStore";
import { ROUTER_NAMES } from "@/constants/routerNames";

@Component({
  components: {
    AuthErrorDialog,
    NavBar,
  },
})
export default class Language extends Vue {
  errorMessage = "";
  isShowErrorModal = false;

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

<style scoped lang="scss">
</style>
