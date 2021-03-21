<template>
  <div class="hello">
    <h1>Home</h1>
    <BaseButton :clickEvent="logout">LOGOUT</BaseButton>

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
import BaseButton from "@/components/atoms/BaseButton.vue";

@Component({
  components: {
    AuthErrorDialog,
    BaseButton,
  },
})
export default class Home extends Vue {
  errorMessage = "";
  isShowErrorModal = false;

  async logout() {
    await AuthModule.signOut().catch((err) => {
      this.errorMessage = err.message;
      this.isShowErrorModal = true;
    });
  }
}
</script>

<style scoped lang="scss">
</style>
