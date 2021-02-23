<template>
  <div class="hello">
    <h1>Home</h1>
    <button @click="logout">logout</button>

    <auth-error-dialog
      :errorMessage="errorMessage"
      v-model="isShowErrorModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import AuthErrorDialog from "@/components/AuthErrorDialog.vue";

@Component({
  components: {
    AuthErrorDialog,
  },
})
export default class Home extends Vue {
  errorMessage = "";
  isShowErrorModal = false;

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign out successful
      })
      .catch((error) => {
        // An error happened
        this.errorMessage = error.message;
        this.isShowErrorModal = true;
      });
  }
}
</script>

<style scoped lang="scss">
</style>
