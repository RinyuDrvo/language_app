<template>
  <div class="hello">
    <NavBar :showAuthErrorDialog="showAuthErrorDialog" />
    <router-view :dialog="showValidErrorDialog"></router-view>
    <ValidationErrorDialog
      :errorMessages="validErrorMessages"
      v-model="isShowValidErrorDialog"
    />
    <AuthErrorDialog
      :errorMessage="authErrorMessage"
      v-model="isShowAuthErrorDialog"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthErrorDialog from "@/components/organisms/AuthErrorDialog.vue";
import NavBar from "@/components/organisms/NavBar.vue";
import ValidationErrorDialog from "@/components/organisms/ValidationErrorDialog.vue";

@Component({
  components: {
    NavBar,
    AuthErrorDialog,
    ValidationErrorDialog,
  },
})
export default class Language extends Vue {
  isShowAuthErrorDialog = false;
  authErrorMessage = "";
  isShowValidErrorDialog = false;
  validErrorMessages: string[] = [];

  showAuthErrorDialog(errorMessage: string) {
    this.authErrorMessage = errorMessage;
    this.isShowAuthErrorDialog = true;
  }

  showValidErrorDialog(errorMessages: string[]) {
    this.validErrorMessages = errorMessages;
    this.isShowValidErrorDialog = true;
  }
}
</script>

<style scoped lang="scss">
</style>
