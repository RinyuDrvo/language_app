<template>
  <div class="language-add">
    <LanguageAddForm
      class="language-add__form"
      :languageAddEvent="addLanguage"
      v-model="language"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LanguageAddForm from "@/components/molecules/LanguageAddForm.vue";
import { LanguageModule } from "@/store/modules/LanguageStore";
import { ROUTER_NAMES } from "@/constants/routerNames";

@Component({
  components: {
    LanguageAddForm,
  },
})
export default class LanguageAdd extends Vue {
  language = "";

  // 言語追加
  addLanguage() {
    LanguageModule.add(this.language);
    this.$router.push({ name: ROUTER_NAMES.LANGUAGE_LIST });
  }
}
</script>

<style scoped lang="scss">
</style>
